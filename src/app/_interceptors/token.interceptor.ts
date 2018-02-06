import {Injectable, Injector} from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import {AuthenticationService} from '../_services/authentication.service';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(private inj: Injector) {
  }


  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const auth = this.inj.get(AuthenticationService);
    const token = auth.token;
    if (token !== null) {
      request = request.clone({
        setHeaders: {
          Authorization: auth.token
        }
      });
    }
    return next.handle(request);
  }
}
