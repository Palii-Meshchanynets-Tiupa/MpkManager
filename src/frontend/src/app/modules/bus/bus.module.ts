import {NgModule} from '@angular/core';
import {SharedModule} from '../../shared/shared.module';
import {BusRouting} from './bus-routing.module';
import {BusService} from './bus.service';
import {BusDetailsComponent} from './bus-details/bus-details.component';
import {BusListComponent} from './bus-list/bus-list.component';
import {BusDetailsResolver} from './bus-details/bus-details.resolver';

@NgModule({
  imports: [
    SharedModule,
    BusRouting
  ],
  declarations: [
    BusListComponent,
    BusDetailsComponent
  ],
  providers: [
    BusService,
    BusDetailsResolver,
  ]
})
export class BusModule { }
