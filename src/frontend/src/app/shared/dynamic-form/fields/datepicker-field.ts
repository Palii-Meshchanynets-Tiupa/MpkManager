import {FieldBase} from '../field-base';

export class DatepickerField<T> extends FieldBase<T> {

  controlType = 'datepicker';

  constructor(options: {} = {}) {
    super(options);
  }
}
