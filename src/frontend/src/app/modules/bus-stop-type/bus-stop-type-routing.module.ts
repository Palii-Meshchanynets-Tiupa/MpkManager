import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {BusStopTypeDetailsComponent} from './bus-stop-type-details/bus-stop-type-details.component';
import {BusStopTypeListComponent} from './bus-stop-type-list/bus-stop-type-list.component';
import {BusStopTypeDetailsResolver} from './bus-stop-type-details/bus-stop-type-details.resolver';

const routes: Routes = [
  {path: '', component: BusStopTypeListComponent},
  {
    path: ':id',
    component: BusStopTypeDetailsComponent,
    resolve: {
      entity: BusStopTypeDetailsResolver
    }
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class BusStopTypeRouting {
}
