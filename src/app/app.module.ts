import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './_templates/login/login.component';
import { RegisterComponent } from './_templates/register/register.component';
import { HomeComponent } from './_templates/home/home.component';
import { ProfileComponent } from './_templates/profile/profile.component';

import { AuthInterceptorProviders } from './_helpers/auth.interceptor';
import { ModalModule } from 'ngx-bootstrap/modal';
import { CloseMenuDirective } from './_directives/close-menu.directive';
import { NavUserComponent } from './_templates/_components/navbar/nav-user/nav-user.component'
import { NavAdminComponent } from './_templates/_components/navbar/nav-admin/nav-admin.component';
import { NavClientComponent } from './_templates/_components/navbar/nav-client/nav-client.component';
import { QRCodeModule } from 'angular2-qrcode';
import { QrGeneratorComponent } from './_templates/_components/qr-generator/qr-generator.component';
import { NgQrScannerModule } from 'angular2-qrscanner';
import { ScannerQrComponent } from './_templates/_components/scanner-qr/scanner-qr.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ProfileComponent,
    CloseMenuDirective,
    NavUserComponent,
    NavAdminComponent,
    NavClientComponent,
    QrGeneratorComponent,
    ScannerQrComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    QRCodeModule,
    NgQrScannerModule,
    ModalModule.forRoot()
  ],
  providers: [AuthInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
