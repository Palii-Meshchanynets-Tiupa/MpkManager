import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AppConstants } from '../app.constants';

@Injectable()
export class AuthService {

  public jsonHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(protected http: HttpClient) {
  }

  authenticate(credentials: { username: string, password: string }): Promise<any> {
    return this.http.post(`${AppConstants.LOGIN_URL}?username=${credentials.username}&password=${credentials.password}`, null,
          {headers: this.jsonHeaders})
      .toPromise();
  }
}
