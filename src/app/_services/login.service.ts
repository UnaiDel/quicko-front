import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from './afAuth.service';
import { TokenStorageService } from './token-storage.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  @Output() change: EventEmitter<boolean> = new EventEmitter();

  isLogged = false;


  constructor(
    private http: HttpClient,
    private authS: AuthService,
    private tokenStorage: TokenStorageService,

  ) {
  }

  loggin() {

    let isLoggedIn = !!this.tokenStorage.getToken();
    console.log('no logueadosssssssssss');
    if (isLoggedIn) {
      console.log('logueado');
      let email = this.tokenStorage.getUser().email;
      console.log(email, 'email');
      this.authS.isLoggin(email).subscribe(
        user => {
          console.log(user, 'ssssssssssssssssssssssss');
          this.saveStorage(user);
          this.isLogged = true;
          this.change.emit(this.isLogged);
        },
        err => {
          console.log(err);
          this.isLogged = false;
          this.change.emit(this.isLogged);
        }
      );

    }
    console.log('false  final');
    this.isLogged = false;
    this.change.emit(this.isLogged);
  }



  saveStorage(user: any): void {
    this.tokenStorage.saveUser(user);
    this.tokenStorage.saveToken(user.accessToken);
  }


}
