import {Component} from '@angular/core';
import {CellDataHolder, CellDef, ColumnDef} from '../data-table.component';

@Component({
  selector: 'app-text-cell',
  template: `
    <div>{{ value }}</div>
  `,
  styles: [``]
})
export class TextCellComponent extends CellDataHolder {

  public value: string;

}

export const TextCellDefinition: CellDef = {
  type: TextCellComponent,
  handler: (entity: any, column: ColumnDef, obj: any): any => {
    obj.value = entity[column.columnDef];
    return obj;
  }
};
