import { Injectable } from '@angular/core';
import { Account } from '../../models/account';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root',
})
export class AuthService {
  
private loggedIn: boolean = false;

constructor(private router: Router) { }

  public account: Account;

  get isLoggedIn() {
    return this.loggedIn;
  }
  
  userLogin() {
    this.loggedIn = true;
  }

  userLogOut() {
    this.loggedIn = false;
    this.account = null;
    this.router.navigate(['/']);
  }

}
