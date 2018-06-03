import {Component, HostListener, OnDestroy, ViewChild} from '@angular/core';
import * as ol from 'openlayers';
import {MapComponent} from '../map/map.component';
import {BusStop} from './but-stop';
import {MatTooltip} from '@angular/material';

@Component({
  selector: 'app-bus-stop',
  template: `
    <div class="stop"
         [matTooltip]="getName()"
         [matTooltipPosition]="'above'"
         fxLayoutAlign="center center" 
         *ngIf="mapComponent.busStopState.shown" 
         [class.selected]="isSelected" 
         [class.notsaved]="!isSaved">
    </div>
  `,
  styles: [`
    .stop {
      height: 20px;
      width: 20px;
      border-radius: 50%;
      border: 4px solid #444444;
      background-color: rgba(214, 0, 84, 0.86);
    }

    .stop.selected {
      border-color: #aeaeae !important;
      cursor: -webkit-grab;
      cursor: -moz-grab;
      cursor: grab;
    }

    .stop.selected:active {
      cursor: grabbing;
      cursor: -moz-grabbing;
      cursor: -webkit-grabbing;
    }

    .stop.notsaved {
      background-color: rgb(255, 255, 255);
    }

    :host {
      margin: 10px;
    }
  `]
})
export class BusStopComponent implements OnDestroy {

  entity: BusStop;

  overlay: ol.Overlay;
  mapComponent: MapComponent;

  isSelected = false;
  isSaved = false;
  // isDragging = false;

  constructor() {
  }

  getName() {
    if (!this.entity.name || !this.entity.number) {
      return 'Unnamed';
    }
    return `${this.entity.name} ${this.entity.number}`;
  }

  // @HostListener('mouseup', ['$event'])
  // onMouseUp(event: any) {
  //   if (event.button !== 0) { // left mouse btn
  //     return;
  //   }
  //
  //   if (this.isDragging) {
  //     this.isDragging = false;
  //     return;
  //   }

  @HostListener('click')
  onClick() {
    this.toggle();
  }

  toggle() {
    if (this.mapComponent.busStopState.selected == null || this.mapComponent.busStopState.selected !== this) {
      this.select();
    } else {
      this.deselect();
    }
  }

  select() {
    this.mapComponent.busStopState.compRefs.forEach(compRef => {
      compRef.instance.isSelected = false;
    });
    this.isSelected = true;
    this.mapComponent.busStopState.selected = this;
    this.mapComponent.busStopState.formShown = true;
    this.mapComponent.busStopState.controlGroup.setValue({ name: this.entity.name || '', number: this.entity.number || 0 });
  }

  deselect() {
    this.isSelected = false;
    this.mapComponent.busStopState.selected = null;
    this.mapComponent.busStopState.formShown = false;
    this.mapComponent.busStopState.controlGroup.setValue({ name: '', number: 0 });
  }

  // @HostListener('mousedown', ['$event'])
  // onMouseDown(event: any) {
  //   if (event.button !== 0) { // left mouse btn
  //     return;
  //   }
  //   this.isDragging = true;
  // }
  //
  // @HostListener('mousemove', ['$event'])
  // onMouseMove(event: any) {
  //   if (!this.isDragging) {
  //     return;
  //   }
  //   console.log(event);
  //   const coordinate = this.overlay.getMap().getEventCoordinate(event);
  //   this.overlay.setPosition(coordinate);
  // }

  ngOnDestroy(): void {
    this.deselect();
    this.overlay = null;
    if (this.overlay) {
      this.overlay.getMap().removeOverlay(this.overlay);
    }
  }
}
