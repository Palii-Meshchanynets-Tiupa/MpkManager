import {FieldBase} from '../field-base';

export class TextboxField<T> extends FieldBase<T> {

  controlType = 'textbox';
  type: string;

  constructor(options: {} = {}) {
    super(options);
    this.type = options['type'] || '';
  }
}
