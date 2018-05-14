import {HeaderItem} from '../page-header/page-header.component';
import {Constructor} from './base.mixin';
import {ActivatedRoute, Router} from '@angular/router';

export function HasHeaderItems<T extends Constructor>(Base: T) {
  return class extends Base {
    headerItems: Array<HeaderItem>;

    backItem(router: Router, activatedRoute: ActivatedRoute): HeaderItem {
      return {position: 'left', icon: 'arrow_back', evenHandler: () => router.navigate(['../'], {relativeTo: activatedRoute})};
    }

    addItem(router: Router, activatedRoute: ActivatedRoute): HeaderItem {
      return {position: 'right', icon: 'add', evenHandler: () => router.navigate(['./', ''], {relativeTo: activatedRoute})};
    }

  };
}
