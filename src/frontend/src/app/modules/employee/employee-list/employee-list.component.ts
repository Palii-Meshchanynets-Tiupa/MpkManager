import {Component, OnInit, ViewChild} from '@angular/core';
import {HasEntityList} from '../../../shared/mixins/has-entity-list';
import {TextCellDefinition} from '../../../shared/data-table/cells/text-cell.component';
import {EmployeeService} from '../employee.service';
import {HasHeaderItems} from '../../../shared/mixins/has-header-items';
import {MixinBase} from '../../../shared/mixins/mixin';
import {ActivatedRoute, Router} from '@angular/router';
import {ActionsCellDefinition} from '../../../shared/data-table/cells/actions-cell.component';
import {DataTableComponent} from '../../../shared/data-table/data-table.component';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent extends HasHeaderItems(HasEntityList(MixinBase)) implements OnInit {

  @ViewChild(DataTableComponent) dataTable: DataTableComponent;

  constructor(public service: EmployeeService, public router: Router, public activatedRoute: ActivatedRoute) {
    super();
  }

  ngOnInit() {
    this.columns = [
      {columnDef: 'username', header: 'USERNAME', cell: TextCellDefinition},
      {columnDef: 'firstName', header: 'FIRST_NAME', cell: TextCellDefinition},
      {columnDef: 'lastName', header: 'LAST_NAME', cell: TextCellDefinition},
      {columnDef: 'pesel', header: 'PESEL', cell: TextCellDefinition},
      {columnDef: 'enabled', header: 'ENABLED', cell: TextCellDefinition},
      {
        columnDef: 'actions',
        width: '70px',
        cell: new ActionsCellDefinition(this.editAction, this.deleteAction)
      },
    ];

    this.headerItems = [this.backItem, this.addItem];

    super.ngOnInit();
  }

}
