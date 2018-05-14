import {NgModule} from '@angular/core';
import {SharedModule} from '../../shared/shared.module';
import {BusStopTypeRouting} from './bus-stop-type-routing.module';
import {BusStopTypeService} from './bus-stop-type.service';
import {BusStopTypeDetailsComponent} from './bus-stop-type-details/bus-stop-type-details.component';
import {BusStopTypeListComponent} from './bus-stop-type-list/bus-stop-type-list.component';
import {BusStopTypeDetailsResolver} from './bus-stop-type-details/bus-stop-type-details.resolver';

@NgModule({
  imports: [
    SharedModule,
    BusStopTypeRouting
  ],
  declarations: [
    BusStopTypeListComponent,
    BusStopTypeDetailsComponent
  ],
  providers: [
    BusStopTypeService,
    BusStopTypeDetailsResolver
  ]
})
export class BusStopTypeModule { }
