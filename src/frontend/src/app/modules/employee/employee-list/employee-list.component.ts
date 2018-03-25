import { Component, OnInit } from '@angular/core';
import { EntityListComponent } from '../../../shared/components/entity-list/entity-list.component';
import { TextCellComponent } from '../../../shared/components/text-cell.component';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent extends EntityListComponent implements OnInit {

  constructor(public service: EmployeeService) {
    super(service);
  }

  ngOnInit() {
    this.columns = [
      { columnDef: 'username', header: 'Username', cell: TextCellComponent },
      { columnDef: 'uuid', header: 'Uuid', cell: TextCellComponent },
      { columnDef: 'enabled', header: 'Enabled', cell: TextCellComponent },
    ];
  }

}
