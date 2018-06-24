import {Component, OnInit, ViewChild} from '@angular/core';
import {HasEntityList} from '../../../shared/mixins/has-entity-list';
import {TextCellDefinition} from '../../../shared/data-table/cells/text-cell.component';
import {HasHeaderItems} from '../../../shared/mixins/has-header-items';
import {MixinBase} from '../../../shared/mixins/mixin';
import {ActivatedRoute, Router} from '@angular/router';
import {ActionsCellDefinition} from '../../../shared/data-table/cells/actions-cell.component';
import {DataTableComponent} from '../../../shared/data-table/data-table.component';
import {BusTypeService} from '../bus-type.service';

@Component({
  selector: 'app-bus-list',
  templateUrl: './bus-type-list.component.html',
  styleUrls: ['./bus-type-list.component.css']
})
export class BusTypeListComponent extends HasHeaderItems(HasEntityList(MixinBase)) implements OnInit {

  @ViewChild(DataTableComponent) dataTable: DataTableComponent;

  constructor(public service: BusTypeService,
              public router: Router,
              public activatedRoute: ActivatedRoute) {
    super();
  }

  ngOnInit() {
    this.columns = [
      {columnDef: 'name', header: 'main.titleName', cell: TextCellDefinition},
      {columnDef: 'description', header: 'main.description', cell: TextCellDefinition},
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
