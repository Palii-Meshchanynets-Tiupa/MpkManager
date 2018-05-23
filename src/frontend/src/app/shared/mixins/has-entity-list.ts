import {ColumnDef, DataTableComponent} from '../data-table/data-table.component';
import {Constructor} from './mixin';
import {CrudEntityService} from '../service/crud-entity.service';
import {Entity} from '../entity';
import {ActivatedRoute, Router} from '@angular/router';
import {ActionsDefinition} from '../data-table/cells/actions-cell.component';
import {assertNotNull} from '../utils';
import {OnInit} from '@angular/core';

export function HasEntityList<T extends Constructor<OnInit>>(Base: T) {
  return class extends Base implements OnInit {
    columns: Array<ColumnDef>;

    router: Router;
    activatedRoute: ActivatedRoute;

    dataTable: DataTableComponent;

    service: CrudEntityService<any>;

    ngOnInit(): void {
      assertNotNull(this.columns, 'columns: ColumnDef[] is not defined');
      assertNotNull(this.service, 'service: CrudEntityService is not defined');
      assertNotNull(this.activatedRoute, 'activatedRoute: ActivatedRoute is not defined');
      assertNotNull(this.router, 'router: Router is not defined');
      super.ngOnInit();
    }

    deleteEntity(entity: Entity) {
      this.service.delete(entity)
        .then(() => this.dataTable.refresh());
    }

    goToEdit(entity: Entity) {
      this.router.navigate([entity.id], {relativeTo: this.activatedRoute});
    }

    get editAction(): ActionsDefinition {
      return {icon: 'mode_edit', color: 'accent', clickHandler: (entity) => this.goToEdit(entity)};
    }

    get deleteAction(): ActionsDefinition {
      return {icon: 'delete', color: 'primary', clickHandler: (entity) => this.deleteEntity(entity)};
    }
  };
}
