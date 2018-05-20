import {Component} from '@angular/core';
import {CellDataHolder, CellDef} from '../data-table.component';

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
  handler: (entity, column, obj) => {
    obj.value = entity[column.columnDef];
    return obj;
  }
};
