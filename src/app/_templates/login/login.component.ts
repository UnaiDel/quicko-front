import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmailService } from 'src/app/_services/email.service';
import { LoginService } from 'src/app/_services/login.service';
import { AuthService } from '../../_services/afAuth.service';
import { TokenStorageService } from '../../_services/token-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: any = {
    email: null,
    password: null
  };
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];

  constructor(
    private authService: AuthService, 
    private tokenStorage: TokenStorageService,
    private emailService: EmailService,
    private router: Router,
    private loginS: LoginService
    ) 
    { }

  ngOnInit(): void {
    this.loginS.change.subscribe((isLoggedIn: boolean) => {
      
      this.isLoggedIn = isLoggedIn;
      isLoggedIn ?  this.router.navigate(['home']) : '';
  });
   
  }

  onSubmit(): void {

    this.authService.login(this.form).subscribe(
      data => {
        this.tokenStorage.saveToken(data.accessToken);
        this.tokenStorage.saveUser(data);
        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.tokenStorage.getUser().roles;
       // this.router.navigate(['home']);
       this.reloadPage();
      },
      err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    );
  }
  recordarPass(){
    const { email } = this.form;
    this.emailService.verificarPass(email).subscribe(
      data => {
        this.isLoggedIn = true;
      },
      err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    );

  }
  reloadPage(): void {
    window.location.reload();
  }
}
