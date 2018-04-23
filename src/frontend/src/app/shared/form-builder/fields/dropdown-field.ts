import {FieldBase} from '../field-base';

export class DropdownField<T> extends FieldBase<T> {

  controlType = 'dropdown';
  options: {value: string, viewValue: any}[] = [];

  constructor(options: {} = {}) {
    super(options);
    this.options = options['options'] || [];
  }
}
