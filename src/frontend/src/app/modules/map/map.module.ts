import {NgModule} from '@angular/core';
import {SharedModule} from '../../shared/shared.module';
import {MapRouting} from './map-routing.module';
import {BusStopService} from './bus-stop/bus-stop.service';
import {MapComponent} from './map/map.component';
import {LineService} from './line/line.service';
import {BusStopComponent} from './bus-stop/bus-stop.component';

@NgModule({
  imports: [
    SharedModule,
    MapRouting
  ],
  declarations: [
    MapComponent,
    BusStopComponent
  ],
  entryComponents: [
    BusStopComponent
  ],
  providers: [
    BusStopService,
    LineService,
  ]
})
export class MapModule { }
