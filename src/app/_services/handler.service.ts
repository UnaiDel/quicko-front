import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from './afAuth.service';
import { TokenStorageService } from './token-storage.service';

@Injectable({
  providedIn: 'root'
})
export class HandlerService {

  errorMessage = '';

  constructor(
    private tokenStorage: TokenStorageService,
    private auth: AuthService
    ) { }

  






}

