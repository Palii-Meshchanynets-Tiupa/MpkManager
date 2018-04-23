import { CollectionViewer, DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs/Observable';
import { Entity } from '../../entity';
import { CrudEntityService } from '../../service/crud-entity.service';
import { Page } from '../../page';

export class EntityDataSource extends DataSource<Entity> {

  constructor(protected service: CrudEntityService<Entity>) {
    super();
  }

  connect(collectionViewer: CollectionViewer): Observable<Array<Entity>> {
    return Observable.fromPromise(this.service.getPage({ page: 0, size: 5}).then((res: Page<Entity>) => res.content));
  }

  disconnect(collectionViewer: CollectionViewer): void {
  }

}
