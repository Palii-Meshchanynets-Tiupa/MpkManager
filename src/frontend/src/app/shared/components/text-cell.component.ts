import { Component } from '@angular/core';
import { CellDef } from './data-table/data-table.component';

@Component({
  selector: 'app-text-cell',
  template: `
    <div>{{ prop }}</div>
  `,
  styles: [`
  `]
})
export class TextCellComponent extends CellDef {

  constructor() {
    super();
  }

}
