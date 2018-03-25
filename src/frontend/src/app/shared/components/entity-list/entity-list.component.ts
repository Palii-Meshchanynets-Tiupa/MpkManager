import { ColumnDef } from '../data-table/data-table.component';
import { EmployeeService } from '../../../modules/employee/employee.service';

export class EntityListComponent {

  columns: Array<ColumnDef>;

  constructor(protected service: EmployeeService) { }

}
