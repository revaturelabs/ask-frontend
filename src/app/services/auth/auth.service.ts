import { Injectable } from '@angular/core';
import { Account } from '../../models/Account';
import { User } from '../../models/User';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Image } from 'src/app/models/Image';


@Injectable({
  providedIn: 'root',
})
export class AuthService {

  private loggedIn: boolean = false;
  public account: Account;

  constructor(private http: HttpClient, private router: Router) { }

  get isLoggedIn() {
    return this.loggedIn;
  }

  /**
   * Logs in as the user argument.
   * 
   * Http logic should possibly go here in the future.
   * 
   * @param user the user retrieved from the server upon login
   */
  userLogin(account: Account) {
    this.loggedIn = true;
    this.account = account;
    this.router.navigate(['/questions']);
    console.log(this.account);
  }

  userLogOut() {
    this.loggedIn = false;
    this.account = null;
    this.router.navigate(['/']);
  }

  attemptLogin(id: number){
    this.http
      .get<Account>(`${environment.userUri}/${id}`)
      .subscribe((account: Account) => {
        this.userLogin(account);
      });
  }
}
