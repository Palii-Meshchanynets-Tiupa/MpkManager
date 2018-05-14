import {Component, OnInit, ViewChild} from '@angular/core';
import {HasEntityList} from '../../../shared/mixins/has-entity-list';
import {TextCellDefinition} from '../../../shared/data-table/cells/text-cell.component';
import {HasHeaderItems} from '../../../shared/mixins/has-header-items';
import {BaseMixin} from '../../../shared/mixins/base.mixin';
import {ActivatedRoute, Router} from '@angular/router';
import {ActionsCellDefinition} from '../../../shared/data-table/cells/actions-cell.component';
import {DataTableComponent} from '../../../shared/data-table/data-table.component';
import {BusStopTypeService} from '../bus-stop-type.service';

@Component({
  selector: 'app-bus-list',
  templateUrl: './bus-stop-type-list.component.html',
  styleUrls: ['./bus-stop-type-list.component.css']
})
export class BusStopTypeListComponent extends HasHeaderItems(HasEntityList(BaseMixin)) implements OnInit {

  @ViewChild(DataTableComponent) dataTable: DataTableComponent;

  constructor(public service: BusStopTypeService,
              public router: Router,
              public route: ActivatedRoute) {
    super();
  }

  ngOnInit() {
    this.columns = [
      {columnDef: 'name', header: 'Name', cell: TextCellDefinition},
      {columnDef: 'description', header: 'Description', cell: TextCellDefinition},
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
