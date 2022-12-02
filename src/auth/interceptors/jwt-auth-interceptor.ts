import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';


@Injectable()
export class JwtAuthInterceptor implements HttpInterceptor {
    constructor(
      private router: Router) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      //const token = this.storageService.getToken();
      // if (token) {
      //   request = request.clone({
      //     setHeaders: {
      //       Authorization: `Bearer ${token}`
      //     }
      //   });
      // }

      request = this.appendHeaders(request);

      return next.handle(request);
    }

    private appendHeaders(request: HttpRequest<any>) {
        let newRequest = request.clone({
            setHeaders: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, PATCH, DELETE',
                'Access-Control-Allow-Headers': 'Access-Control-Allow-Headers, Origin, Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Allow-Origin, Access-Control-Request-Headers, X-Authorization',
                'Cache-Control': 'no-cache, no-store',
                'Pragma': 'no-cache',
            }
        });

        return newRequest;
    }
}
