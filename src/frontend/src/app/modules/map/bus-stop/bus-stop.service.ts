import {Injectable} from '@angular/core';
import {CrudEntityService} from '../../../shared/service/crud-entity.service';
import {AppConstants} from '../../../app.constants';
import {HttpClient} from '@angular/common/http';
import {BusStop} from './but-stop';

@Injectable()
export class BusStopService extends CrudEntityService<BusStop> {

  constructor(http: HttpClient) {
    super(AppConstants.BUS_STOP_URL, http);
  }

  getAll(): Promise<Array<BusStop>> {
    return this.http.get<Array<BusStop>>(`${this.url}/all`, {headers: this.jsonHeaders})
      .toPromise()
      .then(res => Array.from(res));
  }

}
