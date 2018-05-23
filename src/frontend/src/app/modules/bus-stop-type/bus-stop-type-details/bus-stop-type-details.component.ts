import {Component, OnInit} from '@angular/core';
import {HasHeaderItems} from '../../../shared/mixins/has-header-items';
import {MixinBase} from '../../../shared/mixins/mixin';
import {ActivatedRoute, Router} from '@angular/router';
import {TextboxField} from '../../../shared/dynamic-form/fields/textbox-field';
import {HasEntityForm} from '../../../shared/mixins/has-entity-form';
import {BusStopTypeService} from '../bus-stop-type.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './bus-stop-type-details.component.html',
  styleUrls: ['./bus-stop-type-details.component.css']
})
export class BusStopTypeDetailsComponent extends HasEntityForm(HasHeaderItems(MixinBase)) implements OnInit {

  constructor(public service: BusStopTypeService, public router: Router, public activatedRoute: ActivatedRoute) {
    super();
  }

  ngOnInit() {
    super.ngOnInit();

    this.entity = this.activatedRoute.snapshot.data.entity;

    this.headerItems = [this.backItem];

    this.fields = [
      new TextboxField({
        entity: this.entity,
        key: 'name',
        label: 'Name',
        required: true,
        order: 1
      }),

      new TextboxField({
        entity: this.entity,
        key: 'description',
        label: 'Description',
        order: 2
      }),

    ];
  }

}
