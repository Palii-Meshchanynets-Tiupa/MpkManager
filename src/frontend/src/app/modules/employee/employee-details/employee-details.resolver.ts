import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Injectable} from '@angular/core';
import {Employee} from '../employee';
import {EmployeeService} from '../employee.service';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class EmployeeDetailsResolver implements Resolve<Employee> {
  constructor(private service: EmployeeService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
    return this.service.get(route.params.id);
  }
}
