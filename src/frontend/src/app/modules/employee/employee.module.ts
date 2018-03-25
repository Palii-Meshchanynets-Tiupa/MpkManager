import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { EmployeeRouting } from './employee.routing';
import { EmployeeService } from './employee.service';

@NgModule({
  imports: [
    SharedModule,
    EmployeeRouting
  ],
  declarations: [
    EmployeeListComponent,
    EmployeeDetailsComponent
  ],
  providers: [
    EmployeeService
  ]
})
export class EmployeeModule { }
