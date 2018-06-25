import {Component, OnInit} from '@angular/core';
import {AuthService} from '../shared/service/auth.service';
import {HttpClient} from '@angular/common/http';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public languages: Array<string>;
  public currentLanguage: string;

  constructor(
    protected authService: AuthService,
    protected http: HttpClient,
    protected translate: TranslateService
  ) {
    this.languages = ['en', 'pl'];
    this.currentLanguage = this.languages[0];
    translate.setDefaultLang(this.currentLanguage);
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

  switchLanguage(language: string) {
    this.translate.use(language);
  }
}
