import {Constructor} from './mixin';
import {Entity} from '../entity';
import {FieldBase} from '../dynamic-form/field-base';
import {CrudEntityService} from '../service/crud-entity.service';
import {ActivatedRoute, Router} from '@angular/router';
import {OnInit} from '@angular/core';
import {assertNotNull} from '../utils';

export function HasEntityForm<T extends Constructor<OnInit>>(Base: T) {
  return class extends Base implements OnInit {

    router: Router;
    activatedRoute: ActivatedRoute;

    service: CrudEntityService<any>;

    entity: Entity;
    fields: Array<FieldBase<any>>;

    ngOnInit(): void {
      assertNotNull(this.fields, 'fields: FieldBase[] is not defined');
      assertNotNull(this.entity, 'entity: Entity is not defined');
      assertNotNull(this.service, 'service: CrudEntityService is not defined');
      assertNotNull(this.activatedRoute, 'activatedRoute: ActivatedRoute is not defined');
      assertNotNull(this.router, 'router: Router is not defined');
      super.ngOnInit();
    }

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
