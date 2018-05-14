import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {BusStopTypeService} from '../bus-stop-type.service';
import {BusStopType} from '../but-stop-type';

@Injectable()
export class BusStopTypeDetailsResolver implements Resolve<BusStopType> {
  constructor(private service: BusStopTypeService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
    return this.service.get(route.params.id);
  }
}
