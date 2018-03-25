import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthService } from '../shared/service/auth.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { AlertDialogComponent } from '../shared/dialog/alert-dialog.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  @ViewChild('loginForm') private loginForm: NgForm;

  public credentials = { username: '', password: '' };
  public error = '';

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
        this.error = 'Bad username or password';
      });
  }

}
