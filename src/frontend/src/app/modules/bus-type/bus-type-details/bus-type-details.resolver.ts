import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {BusTypeService} from '../bus-type.service';
import {BusType} from '../but-type';

@Injectable()
export class BusTypeDetailsResolver implements Resolve<BusType> {
  constructor(private service: BusTypeService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
    return this.service.get(route.params.id);
  }
}
