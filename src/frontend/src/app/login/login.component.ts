import {Component, OnInit, ViewChild} from '@angular/core';
import {AuthService} from '../service/auth.service';
import {NgForm} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  @ViewChild('loginForm') private loginForm: NgForm;

  public credentials = { username: '', password: '' };

  constructor(protected authService: AuthService, protected router: Router) {
  }

  login() {
    if (this.loginForm.invalid) {
      return;
    }

    this.authService.authenticate(this.credentials)
      .then(() => {
        this.router.navigateByUrl('/');
      })
      .catch(reason => {
        console.log('error!', reason);
      });
  }

}
