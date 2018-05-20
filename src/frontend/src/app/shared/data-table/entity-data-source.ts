import {CollectionViewer, DataSource} from '@angular/cdk/collections';
import {Observable} from 'rxjs/Observable';
import {Entity} from '../entity';
import {CrudEntityService} from '../service/crud-entity.service';
import {Page, Pageable} from '../page';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {catchError, finalize} from 'rxjs/operators';
import {of} from 'rxjs/observable/of';

export class EntityDataSource extends DataSource<Entity> {

  private entityStream = new BehaviorSubject<Array<Entity>>([]);
  private loadingSubject = new BehaviorSubject<boolean>(false);
  private latestPageable: Pageable = { page: 0, size: 5};

  public loadingObservable = this.loadingSubject.asObservable();

  constructor(protected service: CrudEntityService<Entity>) {
    super();
  }

  connect(collectionViewer: CollectionViewer): Observable<Array<Entity>> {
    return this.entityStream.asObservable();
  }

  disconnect(collectionViewer: CollectionViewer): void {
    this.entityStream.complete();
    this.loadingSubject.complete();
  }

  loadEntities(pageable: Pageable) {
    this.latestPageable = pageable;
    this.loadingSubject.next(true);

    this.service.getPage(pageable)
      .pipe(
        catchError(() => of([])),
        finalize(() => this.loadingSubject.next(false))
      )
      .takeWhile(() => !this.entityStream.closed)
      .subscribe((res: Page<Entity>) => this.entityStream.next(res.content));
  }

  refresh() {
    this.loadEntities(this.latestPageable);
  }
}
