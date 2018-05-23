import {Component, OnInit} from '@angular/core';
import {HasHeaderItems} from '../../../shared/mixins/has-header-items';
import {MixinBase} from '../../../shared/mixins/mixin';
import {ActivatedRoute, Router} from '@angular/router';
import {TextboxField} from '../../../shared/dynamic-form/fields/textbox-field';
import {HasEntityForm} from '../../../shared/mixins/has-entity-form';
import {BusService} from '../bus.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './bus-details.component.html',
  styleUrls: ['./bus-details.component.css']
})
export class BusDetailsComponent extends HasEntityForm(HasHeaderItems(MixinBase)) implements OnInit {

  constructor(public service: BusService, public router: Router, public activatedRoute: ActivatedRoute) {
    super();
  }

  ngOnInit() {
    this.entity = this.activatedRoute.snapshot.data.entity;

    this.headerItems = [this.backItem];

    this.fields = [
      new TextboxField({
        entity: this.entity,
        key: 'vin',
        label: 'Vin',
        required: true,
        order: 1
      }),

      new TextboxField({
        entity: this.entity,
        key: 'number',
        label: 'Number',
        required: true,
        order: 2
      }),

      new TextboxField({
        entity: this.entity,
        key: 'sideNumber',
        label: 'Side Number',
        required: true,
        order: 2
      }),

    ];

    super.ngOnInit();
  }

}
