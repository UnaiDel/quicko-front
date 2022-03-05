import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { User } from 'src/app/_interfaces/user.interface';
import { TokenStorageService } from 'src/app/_services/token-storage.service';

@Component({
  selector: 'app-nav-client',
  templateUrl: './nav-client.component.html',
  styleUrls: ['./nav-client.component.css']
})
export class NavClientComponent implements OnInit {

  public _user ?: User;


  
  constructor(
    public tokenS:TokenStorageService
  ) { }

  ngOnInit(): void {
      this._user= this.tokenS.getUser();
  }

  
}
