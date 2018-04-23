import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AppConstants } from '../../app.constants';
import { Router } from '@angular/router';

interface Principal {
  enabled: boolean;
  username: string;
}

@Injectable()
export class AuthService {

  private principal: Principal;

  public jsonHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });
  public urlEncodedHeaders = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });

  constructor(protected http: HttpClient, protected router: Router) {
  }

  init() {
    this.getPrincipal();
  }

  authenticate(credentials: { username: string, password: string }): Promise<any> {
    return this.http.post(`${AppConstants.LOGIN_URL}`, `username=${credentials.username}&password=${credentials.password}`,
      { headers: this.urlEncodedHeaders })
      .toPromise()
      .then(() => {
        this.getPrincipal();
      });
  }

  getPrincipal(): Promise<any> {
    return this.http.get(`${AppConstants.PRINCIPLE_URL}`, { headers: this.jsonHeaders })
      .toPromise()
      .then(value => {
        if (value != null) {
          this.principal = value as Principal;
        } else {
          this.router.navigateByUrl('/login');
        }
      });
  }

  logout() {
    return this.http.post(`${AppConstants.LOGOUT_URL}`, { headers: this.jsonHeaders })
      .toPromise()
      .then(() => {
        this.principal = null;
        this.router.navigateByUrl('/login');
      });
  }

  isAuthenticated() {
    return this.principal != null;
  }

  getUsername() {
    if (this.isAuthenticated()) {
      return this.principal.username;
    }
  }
}
