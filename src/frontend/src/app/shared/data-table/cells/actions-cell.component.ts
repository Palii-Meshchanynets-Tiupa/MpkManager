import {Component, Type} from '@angular/core';
import {CellDataHolder, CellDef, ColumnDef} from '../data-table.component';

@Component({
  selector: 'app-actions-cell',
  template: `
    <div fxLayout="row">
      <ng-container *ngFor="let button of actionsDefinitions">
        <button fxFlex mat-icon-button [color]="button.color" (click)="button.clickHandler(entity)">
          <mat-icon>{{ button.icon }}</mat-icon>
        </button>
      </ng-container>
    </div>
  `,
  styles: [`

  `]
})
export class ActionsCellComponent extends CellDataHolder {

  actionsDefinitions: Array<ActionsDefinition>;
  entity: any;

  constructor() {
  }
}

export interface ActionsDefinition {
  icon: string;
  color?: 'primary' | 'accent' | 'warn';
  clickHandler: (entity: any) => void;
  entity?: any;
}

export class ActionsCellDefinition implements CellDef {

  handler: (entity: any, column: ColumnDef, obj: any) => any;
  type: Type<CellDataHolder>;

  constructor(actionsDefinitions: ActionsDefinition[]) {
    this.type = ActionsCellComponent;
    this.handler = (entity, column, obj) => {
      obj.actionsDefinitions = actionsDefinitions;
      obj.entity = entity;
      return obj;
    };
  }
}
