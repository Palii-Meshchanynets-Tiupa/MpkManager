import { OnDestroy, Type } from '@angular/core';
import { Subscription } from 'rxjs';

export function LifecycleManaging<T extends Type<OnDestroy>>(Base: T) {
  return class extends Base implements OnDestroy {

    protected alive = true;
    protected masterSubscription = new Subscription();

    ngOnDestroy() {
      super.ngOnDestroy();
      this.masterSubscription.unsubscribe();
      this.alive = false;
    }
  };
}
