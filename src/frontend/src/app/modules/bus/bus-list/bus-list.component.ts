import {Component, OnInit, ViewChild} from '@angular/core';
import {HasEntityList} from '../../../shared/mixins/has-entity-list';
import {TextCellDefinition} from '../../../shared/data-table/cells/text-cell.component';
import {HasHeaderItems} from '../../../shared/mixins/has-header-items';
import {BaseMixin} from '../../../shared/mixins/base.mixin';
import {ActivatedRoute, Router} from '@angular/router';
import {ActionsCellDefinition} from '../../../shared/data-table/cells/actions-cell.component';
import {DataTableComponent} from '../../../shared/data-table/data-table.component';
import {BusService} from '../bus.service';

@Component({
  selector: 'app-bus-list',
  templateUrl: './bus-list.component.html',
  styleUrls: ['./bus-list.component.css']
})
export class BusListComponent extends HasHeaderItems(HasEntityList(BaseMixin)) implements OnInit {

  @ViewChild(DataTableComponent) dataTable: DataTableComponent;

  constructor(public service: BusService,
              public router: Router,
              public route: ActivatedRoute) {
    super();
  }

  ngOnInit() {
    this.columns = [
      {columnDef: 'line', header: 'Line', cell: TextCellDefinition},
      {columnDef: 'vin', header: 'Vin', cell: TextCellDefinition},
      {columnDef: 'number', header: 'Number', cell: TextCellDefinition},
      {columnDef: 'sideNumber', header: 'Side Number', cell: TextCellDefinition},
      {
        columnDef: 'actions',
        width: '70px',
        cell: new ActionsCellDefinition(
          [
            {icon: 'mode_edit', color: 'accent', clickHandler: (entity) => this.goToEdit(entity, this.router, this.route)},
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
