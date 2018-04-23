import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {FieldBase} from '../../field-base';

@Component({
  selector: 'app-field',
  templateUrl: './dynamic-form-field.component.html',
  styleUrls: ['./dynamic-form-field.component.css']
})
export class DynamicFormFieldComponent {

  @Input() field: FieldBase<any>;
  @Input() form: FormGroup;

  get isValid() { return this.form.controls[this.field.key].valid; }

}
