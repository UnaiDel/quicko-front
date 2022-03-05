import { Component, OnInit , Output, EventEmitter, ViewChild } from '@angular/core';
import { AuthService } from './_services/afAuth.service';
import { LoginService } from './_services/login.service';
import { TokenStorageService } from './_services/token-storage.service';
import { UserService } from './_services/user.service';
import { NavClientComponent } from './_templates/_components/navbar/nav-client/nav-client.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {


  private roles: string[] = [];
  isLoggedIn = false;
  errorMessage = '';
  isAdmin = false;
  isClient = false;
  name?: string;
  isUser?: boolean;

  constructor(
    private tokenStorage: TokenStorageService,
    private auth: AuthService,
    private loginS: LoginService

    ) { 
  
  }

  ngOnInit(): void {
      this.loginS.loggin();
      this.loginS.change.subscribe((isLoggedIn: boolean) => {
          this.isLoggedIn = isLoggedIn;
          isLoggedIn ? this.asignRoles() : '';
      });
  

  }
  

  asignRoles()
  {
    this.roles = this.tokenStorage.getUser().roles;
    this.isAdmin = !this.roles.includes('ROLE_ADMIN');
    this.isClient = !this.roles.includes('ROLE_CLIENT');
    this.isUser = !this.roles.includes('ROLE_USER');
    console.log(  this.roles ,'console.log(  this.roles );');
  }

  logout(): void {
    this.tokenStorage.signOut();
    window.location.reload();
  }
}
