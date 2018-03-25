import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/service/auth.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(protected authService: AuthService, protected http: HttpClient) {
  }

  ngOnInit(): void {
    this.authService.init();
  }

  logout() {
    this.authService.logout();
  }

  isAuthenticated() {
    return this.authService.isAuthenticated();
  }
}
