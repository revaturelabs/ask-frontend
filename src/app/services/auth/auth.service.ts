import { Injectable } from '@angular/core';
import { Account } from '../../models/Account';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment'
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/models/User';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  
private loggedIn: boolean = false;

constructor(private router: Router, private http: HttpClient) { }

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
    this.router.navigate(['/question/all']);
  }

  userLogOut() {
    this.loggedIn = false;
    this.account = null;
    this.router.navigate(['/']);
  }

  getUserById(id:number):Observable<User>{
    return this.http.get<User>(`${environment.userUri}/${id}`)
  }

  getAccountById(id:number){
    return this.http.get<Account>(`${environment.userUri}/${id}`)
  }
}
