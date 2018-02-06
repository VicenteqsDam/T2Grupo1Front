import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {AuthenticationService} from '../../_services/authentication.service';
import {User} from '../../_models/user';

@Injectable()
export class UserService {

  public API = 'http://localhost:8080';
  public CAR_API = this.API + '/user';

  constructor(private http: HttpClient, private authenticationService: AuthenticationService) {
  }

  getUsers(): Observable<User[]> {
    // add authorization header with jwt token
    const httpOptions = {
      headers: new HttpHeaders({ 'Authorization': this.authenticationService.token })
    };

    // get users from api
    return this.http.get<User[]>('http://localhost:8080/users', httpOptions);
  }

  get(): Observable<any> {
    return this.http.get(this.CAR_API);
  }

  save(user: any): Observable<any> {
    let result: Observable<Object>;
    if (user == null) {
      result = this.http.put(this.CAR_API, user);
    } else {
      result = this.http.post(this.CAR_API, user);
    }
    return result;
  }

}
