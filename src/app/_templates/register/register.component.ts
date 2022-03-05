import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmailService } from 'src/app/_services/email.service';
import { LoginService } from 'src/app/_services/login.service';
import { AuthService } from '../../_services/afAuth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  form: any = {
    name: null,
    email: null,
    password: null
  };
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  constructor(
    private authService: AuthService,
    private emailS: EmailService,
    private router: Router,
    private loginS: LoginService
    ) { }

  ngOnInit(): void {
    this.loginS.isLogged ? this.router.navigate(['home']) : '';

  }

  onSubmit(): void {
    console.log(this.form);
    const roles = ['user'];
    this.form['roles'] = roles;
    this.authService.register(this.form).subscribe(
      data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
        
      },
      err => {
        console.log(err);
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    );
  }
}
