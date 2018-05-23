import {Component, OnInit} from '@angular/core';
import {HasHeaderItems} from '../../../shared/mixins/has-header-items';
import {MixinBase} from '../../../shared/mixins/mixin';
import {ActivatedRoute, Router} from '@angular/router';
import {DropdownField} from '../../../shared/dynamic-form/fields/dropdown-field';
import {TextboxField} from '../../../shared/dynamic-form/fields/textbox-field';
import {HasEntityForm} from '../../../shared/mixins/has-entity-form';
import {EmployeeService} from '../employee.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent extends HasEntityForm(HasHeaderItems(MixinBase)) implements OnInit {

  constructor(public service: EmployeeService, public router: Router, public activatedRoute: ActivatedRoute) {
    super();
  }

  ngOnInit() {
    this.entity = this.activatedRoute.snapshot.data.entity;

    this.headerItems = [this.backItem];

    this.fields = [
      new TextboxField({
        entity: this.entity,
        key: 'username',
        label: 'Username',
        required: true,
      }),

      new TextboxField({
        entity: this.entity,
        key: 'firstName',
        label: 'First Name',
        required: true,
      }),

      new TextboxField({
        entity: this.entity,
        key: 'lastName',
        label: 'Last Name',
        required: true,
      }),

      new TextboxField({
        entity: this.entity,
        key: 'pesel',
        label: 'Pesel',
        required: true,
      }),

      new TextboxField({
        entity: this.entity,
        show: this.entity.id == null,
        key: 'password',
        label: 'Password',
        type: 'password',
      }),

      new DropdownField({
        entity: this.entity,
        key: 'enabled',
        label: 'Enabled',
        options: [
          {value: true, viewValue: 'enabled', selected: true},
          {value: false, viewValue: 'disabled'}
        ],
      })

    ];

    super.ngOnInit();
  }

}
