import {Component, OnInit, ViewChild} from '@angular/core';
import {HasEntityList} from '../../../shared/mixins/has-entity-list';
import {TextCellDefinition} from '../../../shared/data-table/cells/text-cell.component';
import {HasHeaderItems} from '../../../shared/mixins/has-header-items';
import {MixinBase} from '../../../shared/mixins/mixin';
import {ActivatedRoute, Router} from '@angular/router';
import {ActionsCellDefinition} from '../../../shared/data-table/cells/actions-cell.component';
import {DataTableComponent} from '../../../shared/data-table/data-table.component';
import {BusService} from '../bus.service';

@Component({
  selector: 'app-bus-list',
  templateUrl: './bus-list.component.html',
  styleUrls: ['./bus-list.component.css']
})
export class BusListComponent extends HasHeaderItems(HasEntityList(MixinBase)) implements OnInit {

  @ViewChild(DataTableComponent) dataTable: DataTableComponent;

  constructor(public service: BusService,
              public router: Router,
              public activatedRoute: ActivatedRoute) {
    super();
  }

  ngOnInit() {
    this.columns = [
      {columnDef: 'line', header: 'main.line', cell: TextCellDefinition},
      {columnDef: 'vin', header: 'main.vin', cell: TextCellDefinition},
      {columnDef: 'number', header: 'main.number', cell: TextCellDefinition},
      {columnDef: 'sideNumber', header: 'main.sideNumber', cell: TextCellDefinition},
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
