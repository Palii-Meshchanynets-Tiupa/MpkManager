import {Injectable} from '@angular/core';
import {CrudEntityService} from '../../shared/service/crud-entity.service';
import {Employee} from './employee';
import {AppConstants} from '../../app.constants';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class EmployeeService extends CrudEntityService<Employee> {

  constructor(http: HttpClient) {
    super(AppConstants.EMPLOYEE_URL, http);
  }

}
