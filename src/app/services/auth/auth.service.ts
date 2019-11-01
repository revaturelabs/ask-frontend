import { Injectable } from '@angular/core';
import { Account } from '../../models/account';
import { BehaviorSubject } from 'rxjs'
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root',
})
export class AuthService {
  
private loggedIn: boolean = false;

constructor() { }

  public account: Account;

  get isLoggedIn() {
    return this.loggedIn;
  }
  
  userLogin() {
    this.loggedIn = true;
  }

  userLogOut() {
    this.loggedIn = false;
  }
  
}
