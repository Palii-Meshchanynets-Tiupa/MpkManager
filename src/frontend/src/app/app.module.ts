import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app-root/app.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { AppRouting } from './app.routing';
import { AuthService } from './service/auth.service';
import {FormsModule} from '@angular/forms';
import { InputTextModule, PasswordModule, SplitButtonModule, ToolbarModule } from 'primeng/primeng';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonModule } from 'primeng/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CardModule } from 'primeng/card';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRouting,
    FlexLayoutModule,

    ToolbarModule,
    BrowserAnimationsModule,
    ButtonModule,
    InputTextModule,
    CardModule,
    PasswordModule,

    HttpClientModule
  ],
  providers: [
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
