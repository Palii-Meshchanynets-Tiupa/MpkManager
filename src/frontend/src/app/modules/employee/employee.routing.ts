import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {EmployeeListComponent} from './employee-list/employee-list.component';
import {EmployeeDetailsComponent} from './employee-details/employee-details.component';
import {EmployeeDetailsResolver} from './employee-details/employee-details.resolver';

const routes: Routes = [
  {path: '', component: EmployeeListComponent},
  {
    path: ':id',
    component: EmployeeDetailsComponent,
    resolve: {
      entity: EmployeeDetailsResolver
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
export class EmployeeRouting {
}
