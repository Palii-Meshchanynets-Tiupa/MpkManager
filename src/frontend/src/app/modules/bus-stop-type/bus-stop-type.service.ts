import {Injectable} from '@angular/core';
import {CrudEntityService} from '../../shared/service/crud-entity.service';
import {AppConstants} from '../../app.constants';
import {HttpClient} from '@angular/common/http';
import {BusStopType} from './but-stop-type';

@Injectable()
export class BusStopTypeService extends CrudEntityService<BusStopType> {

  constructor(http: HttpClient) {
    super(BusStopType, AppConstants.BUS_STOP_TYPE_URL, http);
  }

}
