import {NgModule} from '@angular/core';
import {SharedModule} from '../../shared/shared.module';
import {MapRouting} from './map-routing.module';
import {BusStopService} from './bus-stop/bus-stop.service';
import {MapComponent} from './map/map.component';
import {AngularOpenlayersModule} from 'ngx-openlayers';
import {LineService} from './line/line.service';

@NgModule({
  imports: [
    SharedModule,
    AngularOpenlayersModule,
    MapRouting
  ],
  declarations: [
    MapComponent
  ],
  providers: [
    BusStopService,
    LineService,
  ]
})
export class MapModule { }
