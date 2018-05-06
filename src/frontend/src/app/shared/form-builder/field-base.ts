
export class FieldBase<T> {
  entity: T;
  key: string;
  label: string;
  show: boolean;
  required: boolean;
  order: number;
  controlType: string;

  constructor(options: { entity?: T, key?: string, label?: string, show?: boolean, required?: boolean, order?: number, controlType?: string } = {}) {
    this.entity = options.entity || {} as T;
    this.key = options.key || '';
    this.label = options.label || '';
    this.show = options.show || true;
    this.required = !!options.required;
    this.order = options.order === undefined ? 1 : options.order;
    this.controlType = options.controlType || '';
  }
}
