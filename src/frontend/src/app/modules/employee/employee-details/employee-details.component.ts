import {Component, OnInit} from '@angular/core';
import {HasHeaderItems} from '../../../shared/mixins/has-header-items';
import {BaseMixin} from '../../../shared/mixins/base.mixin';
import {ActivatedRoute, Router} from '@angular/router';
import {DropdownField} from '../../../shared/form-builder/fields/dropdown-field';
import {TextboxField} from '../../../shared/form-builder/fields/textbox-field';
import {HasEntityForm} from '../../../shared/mixins/has-entity-form';
import {EmployeeService} from '../employee.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent extends HasEntityForm(HasHeaderItems(BaseMixin)) implements OnInit {

  constructor(public service: EmployeeService, public router: Router, public activatedRoute: ActivatedRoute) {
    super();
  }

  ngOnInit() {
    this.entity = this.activatedRoute.snapshot.data.entity;

    this.headerItems = [
      this.backItem(this.router, this.activatedRoute)
    ];

    this.fields = [
      new TextboxField({
        entity: this.entity,
        key: 'username',
        label: 'Username',
        required: true,
        order: 1
      }),

      new TextboxField({
        entity: this.entity,
        show: this.entity.id == null,
        key: 'password',
        label: 'Password',
        type: 'password',
        order: 2
      }),

      new DropdownField({
        entity: this.entity,
        key: 'enabled',
        label: 'Enabled',
        options: [
          {value: true, viewValue: 'enabled', selected: true},
          {value: false, viewValue: 'disabled'}
        ],
        order: 3
      })

    ];
  }

}
