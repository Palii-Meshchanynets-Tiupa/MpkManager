import {Component, OnInit, ViewChild} from '@angular/core';
import {HasEntityList} from '../../../shared/mixins/has-entity-list';
import {TextCellDefinition} from '../../../shared/data-table/cells/text-cell.component';
import {HasHeaderItems} from '../../../shared/mixins/has-header-items';
import {MixinBase} from '../../../shared/mixins/mixin';
import {ActivatedRoute, Router} from '@angular/router';
import {ActionsCellDefinition} from '../../../shared/data-table/cells/actions-cell.component';
import {DataTableComponent} from '../../../shared/data-table/data-table.component';
import {BusStopTypeService} from '../bus-stop-type.service';

@Component({
  selector: 'app-bus-list',
  templateUrl: './bus-stop-type-list.component.html',
  styleUrls: ['./bus-stop-type-list.component.css']
})
export class BusStopTypeListComponent extends HasHeaderItems(HasEntityList(MixinBase)) implements OnInit {

  @ViewChild(DataTableComponent) dataTable: DataTableComponent;

  constructor(public service: BusStopTypeService,
              public router: Router,
              public activatedRoute: ActivatedRoute) {
    super();
  }

  ngOnInit() {
    this.columns = [
      {columnDef: 'name', header: 'Name', cell: TextCellDefinition},
      {columnDef: 'description', header: 'Description', cell: TextCellDefinition},
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
