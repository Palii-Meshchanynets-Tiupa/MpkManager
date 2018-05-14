import {Entity} from '../../shared/entity';
import {Line} from '../map/line/line';
import {BusType} from '../bus-type/but-type';

export class Bus extends Entity {

  line: Line;
  vin: string;
  number: string;
  sideNumber: string;
  busType: BusType;
}
