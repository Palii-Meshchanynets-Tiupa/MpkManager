import { Entity } from './entity';

export class Page<T extends Entity> {

  content: Array<T>;
  first: boolean;
  last: boolean;
  number: number;
  numberOfElements: number;
  size: number;
  totalElements: number;
  totalPages: number;

}

export class Pageable {

  page: number;
  size: number;

}
