import { HeaderItem } from '../page-header/page-header.component';
import { ActivatedRoute, Router } from '@angular/router';
import { assertNotNull } from '../utils';
import { OnInit, Type } from '@angular/core';

export function HasHeaderItems<T extends Type<OnInit>>(Base: T) {
  return class extends Base implements OnInit {
    headerItems: Array<HeaderItem>;

    router: Router;
    activatedRoute: ActivatedRoute;

    ngOnInit(): void {
      assertNotNull(this.activatedRoute, 'activatedRoute: ActivatedRoute is not defined');
      assertNotNull(this.router, 'router: Router is not defined');

      this.headerItems = this.headerItems || this.initHeaderItems();

      assertNotNull(this.headerItems, 'headerItems: HeaderItem[] is not defined');
      super.ngOnInit();
    }

    get backItem(): HeaderItem {
      return {position: 'left', icon: 'arrow_back', evenHandler: () => this.router.navigate(['../'], {relativeTo: this.activatedRoute})};
    }

    get addItem(): HeaderItem {
      return {position: 'right', icon: 'add', evenHandler: () => this.router.navigate(['./', ''], {relativeTo: this.activatedRoute})};
    }

    protected initHeaderItems(): Array<HeaderItem> {
      throw new Error('initHeaderItems() method should be overridden');
    }

  };
}
