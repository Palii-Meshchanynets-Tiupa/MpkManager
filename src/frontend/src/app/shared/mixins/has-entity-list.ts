import {ColumnDef, DataTableComponent} from '../data-table/data-table.component';
import {Constructor} from './base.mixin';
import {CrudEntityService} from '../service/crud-entity.service';
import {Entity} from '../entity';
import {ActivatedRoute, Router} from '@angular/router';

export function HasEntityList<T extends Constructor>(Base: T) {
  return class extends Base {
    columns: Array<ColumnDef>;

    dataTable: DataTableComponent;

    service: CrudEntityService<any>;

    delete(entity: Entity) {
      this.service.delete(entity)
        .then(() => this.dataTable.refresh());
    }

    goToEdit(entity: Entity, router: Router, route: ActivatedRoute) {
      router.navigate([entity.id], {relativeTo: route});
    }
  };
}
