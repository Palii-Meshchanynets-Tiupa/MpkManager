import {Component, Type} from '@angular/core';
import {CellDataHolder, CellDef, ColumnDef} from '../data-table.component';

@Component({
  selector: 'app-text-cell',
  template: `
    <div>{{ date | date:format }}</div>
  `,
  styles: [``]
})
export class DateCellComponent extends CellDataHolder {

  public date: string;
  public format: string;

}

export class DateCellDefinition implements CellDef {

  handler: (entity: any, column: ColumnDef, obj: any) => any;
  type: Type<CellDataHolder>;

  constructor(format: string = 'dd-MM-yyyy') {
    this.type = DateCellComponent;
    this.handler = (entity: any, column: ColumnDef, obj: any): any => {
      obj.date = entity[column.columnDef];
      obj.format = format;
      return obj;
    };
  }
}
