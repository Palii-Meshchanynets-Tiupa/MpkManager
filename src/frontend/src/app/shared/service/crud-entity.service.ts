import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Entity} from '../entity';
import {Page, Pageable} from '../page';
import {Observable} from 'rxjs/Observable';
import { instantiate } from '../utils';
import { Type } from '@angular/core';

export abstract class CrudEntityService<T extends Entity> {

  public jsonHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  protected constructor(protected entityType: Type<T>, protected url: string, protected http: HttpClient) {
  }

  get(id: number): Observable<T> {
    return this.http.get(`${this.url}/${id}`, {headers: this.jsonHeaders})
      .take(1)
      .map(res => this.setPrototype(res));
  }

  getPage(pageable: Pageable): Observable<Page<T>> {
    return this.http.get<Page<T>>(this.url, {
      headers: this.jsonHeaders,
      params: new HttpParams({fromObject: {page: `${pageable.page}`, size: `${pageable.size}`}})
    })
      .take(1)
      .map(res => res as Page<T>)
      .do(res => res.content = Array.from(res.content).map(ent => this.setPrototype(ent)));
  }

  create(entity: T): Observable<T> {
    return this.http.post<T>(this.url, entity, {headers: this.jsonHeaders})
      .take(1)
      .map(res => this.setPrototype(res));
  }

  update(entity: T): Observable<T> {
    return this.http.patch<T>(this.url, entity, {headers: this.jsonHeaders})
      .take(1)
      .map(res => this.setPrototype(res));
  }

  delete(entity: T): Observable<{}> {
    return this.http.delete(`${this.url}/${entity.id}`, {headers: this.jsonHeaders})
      .take(1);
  }

  protected setPrototype(entity: any): T {
    return Object.assign(instantiate(this.entityType), entity);
  }

}
