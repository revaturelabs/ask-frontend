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

  //RIGHT NOW WE HAVE A USER AND A ACCOUNT OBJECT
  //FRONT END IS MAKING TWO CALLS WHEN LOGGING IN
  //THIS NEEDS TO BE CHANGED
  private loggedIn: boolean = false;
  public account: Account;
  public user: User;

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
    this.login(this.account.id);
    this.router.navigate(['/questions']);
    console.log(this.account);
  }

  userLogOut() {
    this.loggedIn = false;
    this.account = null;
    this.user = null;
    this.router.navigate(['/']);
  }

  userProfilePic(profilePic: FormData) {
    this.http.patch(`${environment.userProfile}/${this.user.id}`, profilePic)
    .subscribe((imageLink: string)=> {
      this.user.profilePic = imageLink;
    })
  }

  login(id: number) {
    this.http
      .get<User>(`${environment.userUri}/${id}`)
      .subscribe((user: User) => {
        if (user != null) {
          this.loggedIn = true;
          this.user = user;
          console.log(this.user);
          this.router.navigate(['/questions']);
        }
      });
  }

  submitted(id: number){
    this.http
      .get<Account>(`${environment.userUri}/${id}`)
      .subscribe((account: Account) => {
        this.userLogin(account);
      });
  }
}
