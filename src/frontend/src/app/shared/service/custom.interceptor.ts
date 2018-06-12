import { throwError, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { catchError, tap } from 'rxjs/operators';

@Injectable()
export class CustomInterceptor implements HttpInterceptor {

  constructor(protected router: Router) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    return next.handle(request)
      .pipe(
        tap((event: HttpEvent<any>) => {
          if (event instanceof HttpResponse) {
            // do stuff with response if you want
          }
        }),
        catchError((res: any) => {
          if (res instanceof HttpErrorResponse) {
            if (res.status === 401) {
              this.router.navigateByUrl('/login');
            }
          }
          return throwError(res);
        })
      );
  }
}
