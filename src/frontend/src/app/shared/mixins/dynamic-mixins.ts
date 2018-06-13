import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  DoCheck,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
  Type
} from '@angular/core';
import { MixinBase, MixinCreationFunction } from './mixin';

export function DynamicMixins<T extends Type<MixinBase>>(Base: T) {
  return class extends Base implements OnInit, OnDestroy, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked {

    mixins: Array<MixinBase> = [];

    instantiateMixin(Mixin: MixinCreationFunction<Type<object>>, fields?: object, base: Type<MixinBase> = MixinBase): object {
      const mixinType = Mixin(base);
      const obj = Object.assign(new mixinType(), fields, this);
      delete obj.mixins;
      this.mixins.push(obj);
      return obj;
    }

    ngOnInit(): void {
      super.ngOnInit();
      this.mixins.forEach(value => value.ngOnInit());
    }

    ngOnChanges(changes: SimpleChanges): void {
      super.ngOnChanges(changes);
      this.mixins.forEach(value => value.ngOnChanges(changes));
    }

    ngOnDestroy(): void {
      super.ngOnDestroy();
      this.mixins.forEach(value => value.ngOnDestroy());
    }

    ngAfterContentChecked(): void {
      super.ngAfterContentChecked();
      this.mixins.forEach(value => value.ngAfterContentChecked());
    }

    ngAfterContentInit(): void {
      super.ngAfterContentInit();
      this.mixins.forEach(value => value.ngAfterContentInit());
    }

    ngAfterViewChecked(): void {
      super.ngAfterViewChecked();
      this.mixins.forEach(value => value.ngAfterViewChecked());
    }

    ngAfterViewInit(): void {
      super.ngAfterViewInit();
      this.mixins.forEach(value => value.ngAfterViewInit());
    }

    ngDoCheck(): void {
      super.ngDoCheck();
      this.mixins.forEach(value => value.ngDoCheck());
    }
  };
}
