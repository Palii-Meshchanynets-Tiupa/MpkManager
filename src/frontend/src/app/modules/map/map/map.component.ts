import {Component, ComponentFactoryResolver, ElementRef, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import * as ol from 'openlayers';
import {BusStopComponent} from '../bus-stop/bus-stop.component';
import {ComponentRef} from '@angular/core/src/linker/component_factory';
import {MatTab, MatTabChangeEvent} from '@angular/material';
import {BusStopService} from '../bus-stop/bus-stop.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {BusStop} from '../bus-stop/but-stop';

class ContextMenuStateHolder {
  shown = false;
  currentPos: ol.Coordinate;
}

class BusStopStateHolder {
  static shownBorder = 14;
  shown = true;
  formShown = false;
  additionMod = false;

  compRefs: Array<ComponentRef<BusStopComponent>> = [];
  selected: BusStopComponent;

  controlGroup: FormGroup;
}

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  @ViewChild('map') mapElRef: ElementRef;
  @ViewChild('mainControl') mainControlElRef: ElementRef;
  @ViewChild('busStopControl') busStopControlElRef: ElementRef;
  @ViewChild('contextMenu') contextMenuElRef: ElementRef;

  @ViewChild('busTab') busTabRef: MatTab;

  @ViewChild('stopTarget', {read: ViewContainerRef}) stopTargetRef;

  contextMenuState = new ContextMenuStateHolder();
  busStopState = new BusStopStateHolder();

  map: ol.Map;
  vectorSource: ol.source.Vector;
  view: ol.View;
  contextMenu: ol.Overlay;

  // style = new ol.style.Style({
  //   fill: new ol.style.Fill({
  //     color: 'rgba(255, 255, 255, 0.2)'
  //   }),
  //   stroke: new ol.style.Stroke({
  //     color: 'rgba(0,60,136,0.5)',
  //     width: 5
  //   }),
  //   image: new ol.style.Circle({
  //     radius: 7,
  //     fill: new ol.style.Fill({
  //       color: '#ffcc33'
  //     })
  //   })
  // });
  //
  // startPoint: ol.Coordinate;
  // finishPoint: ol.Coordinate;

  constructor(private componentFactoryResolver: ComponentFactoryResolver,
              private busStopService: BusStopService) {
  }

  ngOnInit(): void {
    this.busStopState.controlGroup = new FormGroup({
      name: new FormControl('', Validators.required),
      number: new FormControl('', Validators.required)
    });

    this.busStopService.getAll()
      .then(stops => {
        stops.forEach(stop => {
          this.createBusStop([stop.longitude, stop.latitude], stop);
        });
      });

    this.initMap();
  }

  initMap() {
    this.view = new ol.View({
      projection: 'EPSG:3857',
      center: [2512064.716078, 6664869.353555], // lublin
      zoom: 14
    });

    const scaleLineControl = new ol.control.ScaleLine({});

    const mainControl = new ol.control.Control({
      element: this.mainControlElRef.nativeElement,
    });

    const busStopControl = new ol.control.Control({
      element: this.busStopControlElRef.nativeElement,
    });

    this.contextMenu = new ol.Overlay({
      element: this.contextMenuElRef.nativeElement,
    });

    const overlays = [
      this.contextMenu,
    ];

    const controls = ol.control.defaults({}).extend([
      scaleLineControl,
      mainControl,
      busStopControl,
    ]);

    const interactions = ol.interaction.defaults({
      doubleClickZoom: false,
    }).extend([]);

    this.vectorSource = new ol.source.Vector();

    this.map = new ol.Map({
      controls: controls,
      interactions: interactions,
      overlays: overlays,
      view: this.view,
      layers: [
        new ol.layer.Tile({
          source: new ol.source.OSM()
        }),
        new ol.layer.Vector({
          source: this.vectorSource
        })
      ],
      target: this.mapElRef.nativeElement
    });

    this.view.on('change:resolution', () => this.onResolutionChange());

    this.map.on('click', (event: ol.MapBrowserEvent) => this.onMapClick(event));
  }

  onResolutionChange(): void {
    this.busStopState.shown = this.view.getZoom() >= BusStopStateHolder.shownBorder;
  }

  onMapClick(event: ol.MapBrowserEvent): void {
    // if (this.startPoint == null) {
    //   this.startPoint = event.coordinate;
    // } else if (this.finishPoint == null) {
    //   this.finishPoint = event.coordinate;
    // } else {
    //   this.startPoint = this.finishPoint;
    //   this.finishPoint = event.coordinate;
    // }

    // console.log(this.startPoint, this.finishPoint);
    // if (this.startPoint != null && this.finishPoint != null) {
    //   const feature = new ol.Feature(new ol.geom.LineString([this.startPoint, this.finishPoint]));
    //   feature.setStyle(this.style);
    //   this.vectorSource.addFeature(feature);
    // }

    this.contextMenuState.shown = !this.contextMenuState.shown;
    if (this.contextMenuState.shown) {
      this.contextMenu.setPosition(event.coordinate);
      this.contextMenuState.currentPos = event.coordinate;
    }
  }

  createBusStop(coordinate: ol.Coordinate, entity?: BusStop) {
    const factory = this.componentFactoryResolver.resolveComponentFactory(BusStopComponent);

    const component = this.stopTargetRef.createComponent(factory);

    this.busStopState.compRefs.push(component);

    // console.log(this.busStopState.compRefs);

    // if (this.busStopRefs.length > 4) {
    //   const stop = this.busStopRefs.shift();
    //   stop.destroy();
    // }


    const stopOverlay = new ol.Overlay({
      element: component.location.nativeElement,
    });

    component.instance.overlay = stopOverlay;
    component.instance.mapComponent = this;

    if (entity) {
      component.instance.isSaved = true;
      component.instance.entity = entity;
    } else {
      this.busStopState.formShown = true;
      component.instance.entity = new BusStop();
      component.instance.select();
    }

    stopOverlay.setPositioning('center-center');
    stopOverlay.setPosition(coordinate);

    this.map.addOverlay(stopOverlay);
    this.map.render();

    this.contextMenuState.shown = false;
    this.zoomIfStopsNotShown(coordinate);
  }

  saveBusStop() {
    if (!this.busStopState.controlGroup.valid) {
      return;
    }

    const busStop = Object.assign(new BusStop(), this.busStopState.controlGroup.value);
    const position = this.busStopState.selected.overlay.getPosition();
    busStop.longitude = position[0];
    busStop.latitude = position[1];
    this.busStopService.create(busStop)
      .then(res => {
        this.busStopState.selected.entity = res;
        this.busStopState.selected.isSaved = true;
      });
  }

  moveBusStop(coordinate: ol.Coordinate) {
    this.busStopState.selected.overlay.setPosition(coordinate);
    this.busStopState.selected.entity.longitude = coordinate[0];
    this.busStopState.selected.entity.latitude = coordinate[1];
    this.busStopState.selected.isSaved = false;
    this.zoomIfStopsNotShown(coordinate);
  }

  zoomIfStopsNotShown(coordinate: ol.Coordinate) {
    if (!this.busStopState.shown) {
      this.view.animate({
        center: coordinate,
        zoom: BusStopStateHolder.shownBorder,
        duration: 200
      });
    }
  }

  onTabChanged(event: MatTabChangeEvent) {
    this.busStopState.additionMod = event.tab === this.busTabRef;
  }

  getStopList() {
    return this.busStopState.compRefs
      .filter(value => value.instance.overlay != null)
      .map(value => value.instance.entity)
      .filter(value => value != null && value.id != null);
  }

  onBusStopItemClick(stop: BusStop) {
    this.zoomToBusStop(stop);
    this.getStopById(stop.id).select();
  }

  getStopById(id: number): BusStopComponent {
    return this.busStopState.compRefs.map(value => value.instance)
      .find(value => value.entity.id === id);
  }

  zoomToBusStop(stop: BusStop) {
    this.view.animate({
      center: [stop.longitude, stop.latitude],
      zoom: 15,
      duration: 200
    });
  }

  deleteStop() {
    const entity = this.busStopState.selected.entity;
    if (entity.id) {
      this.busStopService.delete(entity)
        .then(() => {
          this.busStopState.compRefs.find(value => value.instance === this.busStopState.selected).destroy();
        });
    } else {
      this.busStopState.compRefs.find(value => value.instance === this.busStopState.selected).destroy();
    }
  }

}
