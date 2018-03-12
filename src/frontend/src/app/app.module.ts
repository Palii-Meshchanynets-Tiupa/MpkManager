import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app-root/app.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { AppRouting } from './app.routing';
import { AuthService } from './service/auth.service';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppMaterialModule } from './app.material.module';
import { MenuComponent } from './menu/menu.component';
import { CustomInterceptor } from './service/custom.interceptor';
import { AlertDialogComponent } from './utils/alert-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MenuComponent,
    AlertDialogComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRouting,
    FlexLayoutModule,
    BrowserAnimationsModule,
    AppMaterialModule,
    HttpClientModule
  ],
  entryComponents: [
    AlertDialogComponent
  ],
  providers: [
    AuthService,
    { provide: HTTP_INTERCEPTORS, useClass: CustomInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
