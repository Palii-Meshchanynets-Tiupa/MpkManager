import {NgModule} from '@angular/core';
import {SharedModule} from '../../shared/shared.module';
import {BusTypeService} from './bus-type.service';
import {BusTypeDetailsComponent} from './bus-type-details/bus-type-details.component';
import {BusTypeListComponent} from './bus-type-list/bus-type-list.component';
import {BusTypeDetailsResolver} from './bus-type-details/bus-type-details.resolver';
import {BusTypeRouting} from './bus-type-routing.module';

@NgModule({
  imports: [
    SharedModule,
    BusTypeRouting
  ],
  declarations: [
    BusTypeListComponent,
    BusTypeDetailsComponent
  ],
  providers: [
    BusTypeService,
    BusTypeDetailsResolver
  ]
})
export class BusTypeModule { }
