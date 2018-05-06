import {ChangeDetectorRef, Component, OnInit, ViewChild} from '@angular/core';
import {HasEntityList} from '../../../shared/mixins/has-entity-list';
import {TextCellDefinition} from '../../../shared/components/data-table/cells/text-cell.component';
import {EmployeeService} from '../employee.service';
import {HasHeaderItems} from '../../../shared/mixins/has-header-items';
import {BaseMixin} from '../../../shared/mixins/base.mixin';
import {ActivatedRoute, Router} from '@angular/router';
import {ActionsCellDefinition} from '../../../shared/components/data-table/cells/actions-cell.component';
import {DataTableComponent} from '../../../shared/components/data-table/data-table.component';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent extends HasHeaderItems(HasEntityList(BaseMixin)) implements OnInit {

  @ViewChild(DataTableComponent) dataTable: DataTableComponent;

  constructor(public service: EmployeeService,
              public router: Router,
              public route: ActivatedRoute) {
    super();
  }

  ngOnInit() {
    this.columns = [
      {columnDef: 'username', header: 'Username', cell: TextCellDefinition},
      {columnDef: 'uuid', header: 'Uuid', cell: TextCellDefinition},
      {columnDef: 'enabled', header: 'Enabled', cell: TextCellDefinition},
      {
        columnDef: 'actions',
        width: 70,
        cell: new ActionsCellDefinition(
          [
            {icon: 'mode_edit', color: 'accent', clickHandler: (entity) => this.router.navigate([entity.id], {relativeTo: this.route})},
            {icon: 'delete', color: 'primary', clickHandler: (entity) => this.delete(entity)}
          ]
        )
      },
    ];

    this.headerItems = [
      this.backItem(this.router, this.route),
      this.addItem(this.router, this.route)
    ];
  }

}
