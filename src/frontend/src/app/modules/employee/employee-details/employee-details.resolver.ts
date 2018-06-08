import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Injectable} from '@angular/core';
import {Employee} from '../employee';
import {EmployeeService} from '../employee.service';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class EmployeeDetailsResolver implements Resolve<Employee> {
  constructor(private service: EmployeeService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
    const id = route.params.id;

    if (id === undefined || id === null || id === '') {
      return Promise.resolve(new Employee());
    }

    return this.service.get(id);
  }
}
