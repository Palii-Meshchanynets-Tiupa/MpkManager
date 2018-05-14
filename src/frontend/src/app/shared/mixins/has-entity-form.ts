import {Constructor} from './base.mixin';
import {Entity} from '../entity';
import {FieldBase} from '../dynamic-form/field-base';
import {CrudEntityService} from '../service/crud-entity.service';
import {ActivatedRoute, Router} from '@angular/router';

export function HasEntityForm<T extends Constructor>(Base: T) {
  return class extends Base {

    router: Router;
    activatedRoute: ActivatedRoute;

    service: CrudEntityService<any>;

    entity: Entity;
    fields: Array<FieldBase<any>>;

    save(entity: Entity) {
      if (entity.id == null) {
        this.service.create(entity)
          .then(res => this.entity = res)
          .then(res => {
            this.router.navigate(['../'], {relativeTo: this.activatedRoute});
            return res;
          });
      } else {
        this.service.update(entity)
          .then(res => this.entity = res)
          .then(res => {
            this.router.navigate(['../'], {relativeTo: this.activatedRoute});
            return res;
          });
      }
    }
  };
}
