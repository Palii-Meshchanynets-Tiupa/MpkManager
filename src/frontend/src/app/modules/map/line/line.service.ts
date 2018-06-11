import {Injectable} from '@angular/core';
import {CrudEntityService} from '../../../shared/service/crud-entity.service';
import {AppConstants} from '../../../app.constants';
import {HttpClient} from '@angular/common/http';
import {Line} from './line';

@Injectable()
export class LineService extends CrudEntityService<Line> {

  constructor(http: HttpClient) {
    super(Line, AppConstants.LINE_URL, http);
  }

}
