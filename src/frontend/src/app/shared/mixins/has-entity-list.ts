import { ColumnDef, DataTableComponent } from '../data-table/data-table.component';
import { CrudEntityService } from '../service/crud-entity.service';
import { Entity } from '../entity';
import { ActivatedRoute, Router } from '@angular/router';
import { ActionsDefinition } from '../data-table/cells/actions-cell.component';
import { assertNotNull } from '../utils';
import { OnInit, Type } from '@angular/core';

export function HasEntityList<T extends Type<OnInit>>(Base: T) {
  return class extends Base implements OnInit {
    columns: Array<ColumnDef>;

    router: Router;
    activatedRoute: ActivatedRoute;

    dataTable: DataTableComponent;

    service: CrudEntityService<any>;

    ngOnInit(): void {
      assertNotNull(this.service, 'service: CrudEntityService is not defined');
      assertNotNull(this.activatedRoute, 'activatedRoute: ActivatedRoute is not defined');
      assertNotNull(this.router, 'router: Router is not defined');

      this.columns = this.columns || this.initColumns();

      assertNotNull(this.columns, 'columns: ColumnDef[] is not defined');
      super.ngOnInit();
    }

    deleteEntity(entity: Entity) {
      this.service.delete(entity)
        .do(() => this.dataTable.refresh())
        .subscribe();
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

    initColumns(): Array<ColumnDef> {
      throw new Error('initColumns() method should be overridden');
    }

  };
}
