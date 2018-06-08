import {Component, OnInit, ViewChild} from '@angular/core';
import {HasEntityList} from '../../../shared/mixins/has-entity-list';
import {TextCellDefinition} from '../../../shared/data-table/cells/text-cell.component';
import {EmployeeService} from '../employee.service';
import {HasHeaderItems} from '../../../shared/mixins/has-header-items';
import {MixinBase} from '../../../shared/mixins/mixin';
import {ActivatedRoute, Router} from '@angular/router';
import {ActionsCellDefinition} from '../../../shared/data-table/cells/actions-cell.component';
import { ColumnDef, DataTableComponent } from '../../../shared/data-table/data-table.component';
import { HeaderItem } from '../../../shared/page-header/page-header.component';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent extends HasHeaderItems(HasEntityList(MixinBase)) {

  @ViewChild(DataTableComponent) dataTable: DataTableComponent;

  constructor(public service: EmployeeService, public router: Router, public activatedRoute: ActivatedRoute) {
    super();
  }

  initHeaderItems(): Array<HeaderItem> {
    return [this.backItem, this.addItem];
  }

  initColumns(): Array<ColumnDef> {
    return [
      {columnDef: 'username', header: 'Username', cell: TextCellDefinition},
      {columnDef: 'firstName', header: 'First Name', cell: TextCellDefinition},
      {columnDef: 'lastName', header: 'Last Name', cell: TextCellDefinition},
      {columnDef: 'pesel', header: 'Pesel', cell: TextCellDefinition},
      {columnDef: 'enabled', header: 'Enabled', cell: TextCellDefinition},
      {
        columnDef: 'actions',
        width: '70px',
        cell: new ActionsCellDefinition(this.editAction, this.deleteAction)
      },
    ];
  }

}
