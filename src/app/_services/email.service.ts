import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from './../../environments/environment';

const AUTH_API = environment.apiUrl;

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  constructor(private http: HttpClient) { }

  verificarPass(email: string): Observable<any> {
    return this.http.post(AUTH_API + 'sendPasswordResetLink', {
      email
    }, httpOptions);
  }


  verifyUser(email: string): Observable<any> {
    return this.http.post(AUTH_API + 'sendVerifyUserLink', {
      email
    }, httpOptions);
  }

}
