import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {BusDetailsComponent} from './bus-details/bus-details.component';
import {BusListComponent} from './bus-list/bus-list.component';
import {BusDetailsResolver} from './bus-details/bus-details.resolver';

const routes: Routes = [
  {path: '', component: BusListComponent},
  {
    path: ':id',
    component: BusDetailsComponent,
    resolve: {
      entity: BusDetailsResolver
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
export class BusRouting {
}
