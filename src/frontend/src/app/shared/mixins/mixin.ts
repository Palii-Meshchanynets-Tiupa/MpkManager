import {AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges} from '@angular/core';

export type Constructor<T = {}> = new(...args: any[]) => T;

/**
 * 1. Always watch names of variables. These mixins highly depend on it
 * 2. Always call super in lifecycle methods (e.g. ngOnInit). Not doing that will result in unexpected bugs
 *  Mixin example:

    export function Example<T extends Constructor<OnInit | OnDestroy>>(Base: T) {
      return class extends Base implements OnInit {

        ngOnInit(): void {
          // whatever
          super.ngOnInit();
        }

        ngOnDestroy(): void {
          // whatever
          super.ngOnDestroy();
        }
      };
    }

 */
export class MixinBase implements OnInit, OnDestroy, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked {
  ngOnInit(): void {}
  ngOnChanges(changes: SimpleChanges): void {}
  ngOnDestroy(): void {}
  ngAfterContentChecked(): void {}
  ngAfterContentInit(): void {}
  ngAfterViewChecked(): void {}
  ngAfterViewInit(): void {}
  ngDoCheck(): void {}
}

// export function Mixin(...baseCtors: Function[]) {
//   return function (derivedCtor: Function) {
//     baseCtors.forEach((baseCtor) => {
//       const fieldCollector = {};
//       baseCtor.apply(fieldCollector);
//       Object.getOwnPropertyNames(fieldCollector).forEach((name) => {
//         derivedCtor.prototype[name] = fieldCollector[name];
//       });
//
//       Object.getOwnPropertyNames(baseCtor.prototype).forEach((name) => {
//         if (name !== 'constructor') {
//           derivedCtor.prototype[name] = baseCtor.prototype[name];
//         }
//       });
//     });
//   };
// }
