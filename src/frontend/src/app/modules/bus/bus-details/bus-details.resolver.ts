import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {BusService} from '../bus.service';
import {Bus} from '../bus';

@Injectable()
export class BusDetailsResolver implements Resolve<Bus> {
  constructor(private service: BusService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
    return this.service.get(route.params.id);
  }
}
