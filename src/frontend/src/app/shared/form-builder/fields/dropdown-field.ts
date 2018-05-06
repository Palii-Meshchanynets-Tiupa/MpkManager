import {FieldBase} from '../field-base';

export class DropdownField<T> extends FieldBase<T> {

  controlType = 'dropdown';
  options: {value: string, viewValue: any, selected?: boolean}[] = [];

  constructor(options: {} = {}) {
    super(options);
    this.options = options['options'] || [];

    const single = this.options.find(value => value.selected);
    if (single != null) {
      this.entity[this.key] = single.value;
    }
  }
}
