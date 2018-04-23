import {HeaderItem} from '../components/page-header/page-header.component';
import {Constructor} from './base.mixin';

export function HasHeaderItems<T extends Constructor>(Base: T) {
  return class extends Base {
    headerItems: Array<HeaderItem>;
  };
}
