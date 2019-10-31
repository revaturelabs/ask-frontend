import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Router, UrlSegment } from '@angular/router';
import { Account } from 'src/app/models/account';


@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private loggedIn = new BehaviorSubject<boolean>(false);

  get isLoggedIn() {
    return this.loggedIn.asObservable();
  }

  constructor(private router: Router) {}

  userLogin(account: Account) {
    // if (account.username !== '' && account.password !== '')
    // if (account.id == )
    // {
    //   // account.id = '1';
    //   this.loggedIn.next(true);
    //   this.router.navigate(['/user-page']);
    // }
    console.log(account.expert)
  }

  expertLogin(account: Account) {
    // if (account.username !== '' && account.password !== '')
    {
      // account.id = '2';
      this.loggedIn.next(true);
      this.router.navigate(['/expert-page']);
    }
  }

  logout() {
    this.loggedIn.next(false);
    this.router.navigate(['/']);
  }
}
