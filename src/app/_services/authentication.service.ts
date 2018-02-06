import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';  // replaces previous Http service
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class AuthenticationService {
  public token: string;

  constructor(private http: HttpClient) {
    // set token if saved in local storage
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.token = currentUser && currentUser.token;
  }

  login(username: string, password: string): Observable<boolean> {
    return this.http.post('http://locaLhost:8080/login', JSON.stringify({username: username, password: password}), {observe: 'response'})
      .map(data => {
        this.token = data.headers.get('Authorization');
        localStorage.setItem('currentUser', JSON.stringify({username: username, token: this.token}));
        return true;
      }).catch(err => {
        return Observable.throw(err);
      });
  }

  logout(): void {
    // clear token remove user from local storage to log user out
    this.token = null;
    localStorage.removeItem('currentUser');
  }
}
