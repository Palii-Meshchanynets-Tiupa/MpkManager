import {ColumnDef} from '../components/data-table/data-table.component';
import {Constructor} from './base.mixin';

export function HasEntityList<T extends Constructor>(Base: T) {
  return class extends Base {
    columns: Array<ColumnDef>;
  };
}
