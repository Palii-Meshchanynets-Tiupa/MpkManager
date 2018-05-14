import {Injectable} from '@angular/core';
import {CrudEntityService} from '../../shared/service/crud-entity.service';
import {AppConstants} from '../../app.constants';
import {HttpClient} from '@angular/common/http';
import {BusType} from './but-type';

@Injectable()
export class BusTypeService extends CrudEntityService<BusType> {

  constructor(http: HttpClient) {
    super(AppConstants.BUS_TYPE_URL, http);
  }

}
