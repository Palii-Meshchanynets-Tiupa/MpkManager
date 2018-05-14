import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {BusTypeDetailsComponent} from './bus-type-details/bus-type-details.component';
import {BusTypeListComponent} from './bus-type-list/bus-type-list.component';
import {BusTypeDetailsResolver} from './bus-type-details/bus-type-details.resolver';

const routes: Routes = [
  {path: '', component: BusTypeListComponent},
  {
    path: ':id',
    component: BusTypeDetailsComponent,
    resolve: {
      entity: BusTypeDetailsResolver
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
export class BusTypeRouting {
}
