import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {FieldBase} from '../field-base';
import {Entity} from '../../entity';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css']
})
export class DynamicFormComponent implements OnInit {

  @Input('fields') fields: FieldBase<any>[] = [];
  @Input('entity') entity: Entity;
  @Output('onSubmit') onSubmit = new EventEmitter<Entity>();
  form: FormGroup;

  constructor() {  }

  ngOnInit() {
    this.form = this.toFormGroup(this.fields);
    this.fields = this.fields.sort((a, b) => a.order - b.order);
  }

  submit() {
    this.onSubmit.emit(Object.assign(this.entity || {}, this.form.value));
  }

  toFormGroup(fields: FieldBase<any>[]) {
    const group: any = {};

    fields.forEach(field => {
      const validators = [];
      if (field.required) {
        validators.push(Validators.required);
      }
      group[field.key] = new FormControl(field.entity[field.key] || '', validators);
    });

    return new FormGroup(group);
  }

}
