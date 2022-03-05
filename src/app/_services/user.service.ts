import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from './../../environments/environment';
import { User } from '../_interfaces/user.interface';
import { TokenStorageService } from './token-storage.service';

const AUTH_API = environment.apiUrl;
const API_URL = 'test/';

@Injectable({
  providedIn: 'root'
})
export class UserService {

   private _user: User = {};
 
   
   


  constructor(
    private http: HttpClient,
    private tokenstorageS : TokenStorageService) { 
      this._user = this.tokenstorageS.getUser();
  }

  public get user(): User {
    return this._user;
  }
  public set user(value: User) {
    this._user = value;
  }


  
  getPublicContent(): Observable<any> {
    return this.http.get(AUTH_API + API_URL + 'all', { responseType: 'text' });
  }

  getUserBoard(): Observable<any> {
    return this.http.get(AUTH_API + API_URL + 'user', { responseType: 'text' });
  }

  getModeratorBoard(): Observable<any> {
    return this.http.get(AUTH_API + API_URL + 'mod', { responseType: 'text' });
  }

  getAdminBoard(): Observable<any> {
    return this.http.get(AUTH_API + API_URL + 'admin', { responseType: 'text' });
  }
}
