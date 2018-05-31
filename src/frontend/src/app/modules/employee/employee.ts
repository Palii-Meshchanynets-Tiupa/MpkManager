import {Entity} from '../../shared/entity';
import {Moment} from 'moment';

export class Employee extends Entity {
  username: string;
  firstName: string;
  lastName: string;
  pesel: string;
  applicationDate: Moment;
  endOfContractDate: Moment;
  enabled: boolean;
}
