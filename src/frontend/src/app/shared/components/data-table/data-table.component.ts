import { Component, Input, OnInit, Type } from '@angular/core';
import { EntityDataSource } from './entity-data-source';
import { CrudEntityService } from '../../service/crud-entity.service';
import { Entity } from '../../entity';
import { DataSource } from '@angular/cdk/collections';

export interface CellDataHolder {
  [key: string]: any;
}

export interface ColumnDef {
  columnDef: string;
  header?: string;
  width?: number; // px
  cell: CellDef;
}

export interface CellDef {
  type: Type<CellDataHolder>;
  handler: (entity: any, column: ColumnDef, obj: any) => any;
}

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css'],
  exportAs: 'data-table'
})
export class DataTableComponent implements OnInit {

  @Input('columns') columns: Array<ColumnDef>;
  @Input('service') service: CrudEntityService<Entity>;

  columnsToDisplay: Array<string>;

  dataSource: EntityDataSource;

  constructor() { }

  ngOnInit() {
    this.dataSource = new EntityDataSource(this.service);
    this.dataSource.loadEntities({ page: 0, size: 5});
    this.columnsToDisplay = this.columns.map(x => x.columnDef);
  }

  refresh() {
    this.dataSource.refresh();
  }

  trackById(index: number, item: Entity): any {
    return item.id;
  }

}
