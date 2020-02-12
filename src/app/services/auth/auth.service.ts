import { Injectable } from '@angular/core';
import { Account } from '../../models/Account';
import { User } from '../../models/User';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';


@Injectable({
  providedIn: 'root',
})
export class AuthService {

  private loggedIn: boolean = false;
  public account: Account;

  constructor(private http: HttpClient, private router: Router) { }

  public user: User;

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
  // userLogin(id: number) {
  //   this.http
  //     .get<User>(`${environment.userUri}/${id}`)
  //     .subscribe((account: User) => {
  //       if (account != null) {
  //         this.loggedIn = true;
  //         this.user = account;
  //         this.router.navigate(['/questions']);
  //       }
  //     });

  //     console.log(this.user);
  //     console.log(this.loggedIn);
  // }

  userLogin(account: Account) {
    this.loggedIn = true;
    this.account = account;
    this.router.navigate(['/questions']);
  }

  userLogOut() {
    this.loggedIn = false;
    this.account = null;
    this.user = null;
    this.router.navigate(['/']);
  }

}
