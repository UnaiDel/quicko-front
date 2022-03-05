import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { User } from '../_interfaces/user.interface';
import { Session } from '../_interfaces/session.interface';

const AUTH_API = environment.apiUrl;
const API_URL = 'auth/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user:User = {};

  constructor(private http: HttpClient) { 

  }

  isLoggin(email: any): Observable<any> {
  
    return this.http.post(AUTH_API + API_URL + 'isLoggin', {email} , httpOptions);
  }

  
  login(user: User): Observable<any> {
  
    return this.http.post(AUTH_API + API_URL +'signin', user , httpOptions);
  }

  register(user: User): Observable<any>{
    return this.http.post(AUTH_API + API_URL +'signup', user, httpOptions);
  }

  
  private extractData(res: Response) {
    let body = res.json();
    return body;
    }
}
