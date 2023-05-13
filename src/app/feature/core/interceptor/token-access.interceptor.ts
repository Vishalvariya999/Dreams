import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class TokenAccessInterceptor implements HttpInterceptor {
  private accessToken: string | null = localStorage.getItem('access-token');
  constructor() {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    request = request.clone({
      setHeaders: { Authorization: `${this.accessToken}` },
    });
    return next.handle(request);
  }
}
