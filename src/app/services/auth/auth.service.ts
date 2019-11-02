import { Injectable } from '@angular/core';
import { Account } from '../../models/Account';
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
  
  /**
   * Logs in as the account argument.
   * 
   * Part of stand-in login functionality.
   * Http logic should possibly go here in the future.
   * 
   * @param account the account retrieved from the server upon login
   */
  userLogin(account: Account) {
    this.loggedIn = true;
    this.account = account;
    this.router.navigate(['/questions']);
  }

  userLogOut() {
    this.loggedIn = false;
    this.account = null;
    this.router.navigate(['/']);
  }

}
