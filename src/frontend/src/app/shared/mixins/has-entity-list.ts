import {ColumnDef, DataTableComponent} from '../data-table/data-table.component';
import {Constructor} from './mixin';
import {CrudEntityService} from '../service/crud-entity.service';
import {Entity} from '../entity';
import {ActivatedRoute, Router} from '@angular/router';
import {ActionsDefinition} from '../data-table/cells/actions-cell.component';

export function HasEntityList<T extends Constructor>(Base: T) {
  return class extends Base {
    columns: Array<ColumnDef>;

    router: Router;
    route: ActivatedRoute;

    dataTable: DataTableComponent;

    service: CrudEntityService<any>;

    deleteEntity(entity: Entity) {
      this.service.delete(entity)
        .then(() => this.dataTable.refresh());
    }

    goToEdit(entity: Entity) {
      this.router.navigate([entity.id], {relativeTo: this.route});
    }

    get editAction(): ActionsDefinition {
      return {icon: 'mode_edit', color: 'accent', clickHandler: (entity) => this.goToEdit(entity)};
    }

    get deleteAction(): ActionsDefinition {
      return {icon: 'delete', color: 'primary', clickHandler: (entity) => this.deleteEntity(entity)};
    }
  };
}
