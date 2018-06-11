import {Injectable} from '@angular/core';
import {CrudEntityService} from '../../shared/service/crud-entity.service';
import {AppConstants} from '../../app.constants';
import {HttpClient} from '@angular/common/http';
import {Bus} from './bus';

@Injectable()
export class BusService extends CrudEntityService<Bus> {

  constructor(http: HttpClient) {
    super(Bus, AppConstants.BUS_URL, http);
  }

}
