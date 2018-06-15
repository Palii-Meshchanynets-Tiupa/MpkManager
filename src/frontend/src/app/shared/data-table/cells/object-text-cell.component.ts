import { Component } from '@angular/core';
import { CellDataHolder, CellDef, ColumnDef } from '../data-table.component';

@Component({
  selector: 'app-object-text-cell',
  template: `
    <div>{{ obj ? obj[field] : '' }}</div>
  `,
  styles: [``]
})
export class ObjectTextCellComponent extends CellDataHolder {

  public obj: string;
  public field: string;

}

export const ObjectTextCellDefinition: CellDef = {

  type: ObjectTextCellComponent,
  handler: (entity: any, column: ColumnDef, obj: any): any => {
    const split = column.columnDef.split('.');

    if (split.length > 2) {
      throw new Error('ObjectTextCellComponent supports only one level deep properties');
    }

    obj.obj = entity[split[0]];
    obj.field = split[1];
    return obj;
  }
};
