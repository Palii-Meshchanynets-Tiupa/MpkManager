import {HeaderItem} from '../page-header/page-header.component';
import {Constructor} from './mixin';
import {ActivatedRoute, Router} from '@angular/router';

export function HasHeaderItems<T extends Constructor>(Base: T) {
  return class extends Base {
    headerItems: Array<HeaderItem>;

    router: Router;
    route: ActivatedRoute;

    get backItem(): HeaderItem {
      return {position: 'left', icon: 'arrow_back', evenHandler: () => this.router.navigate(['../'], {relativeTo: this.route})};
    }

    get addItem(): HeaderItem {
      return {position: 'right', icon: 'add', evenHandler: () => this.router.navigate(['./', ''], {relativeTo: this.route})};
    }

  };
}
