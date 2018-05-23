import {HeaderItem} from '../page-header/page-header.component';
import {Constructor} from './mixin';
import {ActivatedRoute, Router} from '@angular/router';
import {assertNotNull} from '../utils';
import {OnInit} from '@angular/core';

export function HasHeaderItems<T extends Constructor<OnInit>>(Base: T) {
  return class extends Base implements OnInit {
    headerItems: Array<HeaderItem>;

    router: Router;
    activatedRoute: ActivatedRoute;

    ngOnInit(): void {
      assertNotNull(this.headerItems, 'headerItems: HeaderItem[] is not defined');
      assertNotNull(this.activatedRoute, 'activatedRoute: ActivatedRoute is not defined');
      assertNotNull(this.router, 'router: Router is not defined');
      super.ngOnInit();
    }

    get backItem(): HeaderItem {
      return {position: 'left', icon: 'arrow_back', evenHandler: () => this.router.navigate(['../'], {relativeTo: this.activatedRoute})};
    }

    get addItem(): HeaderItem {
      return {position: 'right', icon: 'add', evenHandler: () => this.router.navigate(['./', ''], {relativeTo: this.activatedRoute})};
    }

  };
}
