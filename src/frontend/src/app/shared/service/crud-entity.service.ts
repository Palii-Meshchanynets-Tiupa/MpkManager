import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Entity} from '../entity';
import {Page, Pageable} from '../page';
import {Observable} from 'rxjs/Observable';

export abstract class CrudEntityService<T extends Entity> {

  public jsonHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  protected constructor(protected url: string, protected http: HttpClient) {
  }

  get(id: number): Promise<T> {
    return this.http.get(`${this.url}/${id}`, {headers: this.jsonHeaders})
      .toPromise()
      .then(res => res as T);
  }

  getPage(pageable: Pageable): Observable<Page<T>> {
    return this.http.get<Page<T>>(this.url, {
      headers: this.jsonHeaders,
      params: new HttpParams({fromObject: {page: `${pageable.page}`, size: `${pageable.size}`}})
    }).map(res => res as Page<T>);
  }

  create(entity: T): Promise<T> {
    return this.http.post<T>(this.url, entity, {headers: this.jsonHeaders})
      .toPromise()
      .then(res => res as T);
  }

  update(entity: T): Promise<T> {
    return this.http.patch<T>(this.url, entity, {headers: this.jsonHeaders})
      .toPromise()
      .then(res => res as T);
  }

  delete(entity: T): Promise<{}> {
    return this.http.delete(`${this.url}/${entity.id}`, {headers: this.jsonHeaders})
      .toPromise();
  }

}
