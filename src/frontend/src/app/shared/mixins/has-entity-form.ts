import { Entity } from '../entity';
import { FieldBase } from '../dynamic-form/field-base';
import { CrudEntityService } from '../service/crud-entity.service';
import { ActivatedRoute, Router } from '@angular/router';
import { OnInit, Type } from '@angular/core';
import { assertNotNull } from '../utils';
import { tap } from 'rxjs/operators';

export function HasEntityForm<T extends Type<OnInit>>(Base: T) {
  return class extends Base implements OnInit {

    router: Router;
    activatedRoute: ActivatedRoute;

    service: CrudEntityService<any>;

    entity: Entity;
    fields: Array<FieldBase<any>>;

    ngOnInit(): void {
      assertNotNull(this.service, 'service: CrudEntityService is not defined');
      assertNotNull(this.activatedRoute, 'activatedRoute: ActivatedRoute is not defined');
      assertNotNull(this.router, 'router: Router is not defined');

      this.entity = this.entity || this.initEntity();
      this.fields = this.fields || this.initFields();

      assertNotNull(this.fields, 'fields: FieldBase[] is not defined');
      assertNotNull(this.entity, 'entity: Entity is not defined');
      super.ngOnInit();
    }

    save(entity: Entity) {
      if (entity.isNew()) {
        this.service.create(entity)
          .pipe(
            tap(res => this.entity = res),
            tap(() => this.router.navigate(['../'], { relativeTo: this.activatedRoute }))
          )
          .subscribe();
      } else {
        this.service.update(entity)
          .pipe(
            tap(res => this.entity = res),
            tap(() => this.router.navigate(['../'], { relativeTo: this.activatedRoute }))
          )
          .subscribe();
      }
    }

    initEntity(): Entity {
      throw new Error('initEntity() method should be overridden');
    }

    initFields(): Array<FieldBase<any>> {
      throw new Error('initFields() method should be overridden');
    }
  };
}
