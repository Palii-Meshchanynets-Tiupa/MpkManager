import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Entity } from '../entity';
import { Page, Pageable } from '../page';

export abstract class CrudEntityService<T extends Entity> {

  public jsonHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(protected url: string, protected http: HttpClient) { }

  get(id: number): Promise<Page<T>> {
    return this.http.get(`${this.url}/${id}`, { headers: this.jsonHeaders })
      .toPromise()
      .then(res => res as Page<T>);
  }

  getPage(pageable: Pageable): Promise<Page<T>> {
    return this.http.get(`${this.url}?page=${pageable.page}&size=${pageable.size}`, { headers: this.jsonHeaders })
      .toPromise()
      .then(res => res as Page<T>);
  }

  create(entity: T): Promise<T> {
    return this.http.post(this.url, entity, { headers: this.jsonHeaders })
      .toPromise()
      .then(res => res as T);
  }

  update(entity: T): Promise<T> {
    return this.http.patch(this.url, entity, { headers: this.jsonHeaders })
      .toPromise()
      .then(res => res as T);
  }

  delete(entity: T): void {
    this.http.delete(`${this.url}/${entity.id}`, { headers: this.jsonHeaders })
      .toPromise();
  }

}
