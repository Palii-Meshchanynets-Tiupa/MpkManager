
export class FieldBase<T> {
  entity: T;
  key: string;
  label: string;
  createOnly: boolean;
  required: boolean;
  order: number;
  controlType: string;

  constructor(options: { entity?: T, key?: string, label?: string, createOnly?: boolean, required?: boolean, order?: number, controlType?: string } = {}) {
    this.entity = options.entity || {} as T;
    this.key = options.key || '';
    this.label = options.label || '';
    this.createOnly = options.createOnly || false;
    this.required = !!options.required;
    this.order = options.order === undefined ? 1 : options.order;
    this.controlType = options.controlType || '';
  }
}
