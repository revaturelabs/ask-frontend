import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import { Account } from 'src/app/models/account';
import { HttpClient } from '@angular/common/http';

const url = "http://ec2-54-80-244-190.compute-1.amazonaws.com:1337/users";

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private loggedIn = new BehaviorSubject<boolean>(false);
  account: any;

  get isLoggedIn() {
    return this.loggedIn.asObservable();
  }

  constructor(
    private router: Router,
    private http: HttpClient
    ) {}

  userLogin(account: any) {
    const oUrl = `${url}/${account}`
    // if (account.id == '' && account.password !== '')
    // {
    //   this.loggedIn.next(true);
    //   this.router.navigate(['/user-page']);
    // }
    console.log(this.http.get(oUrl))
    let observable = this.http.get(oUrl);
    observable.subscribe((result=>{
      this.account = result
    }))
    console.log(account)
  }

  expertLogin(account: Account) {
    // if (account.username !== '' && account.password !== '')
    {
      this.loggedIn.next(true);
      this.router.navigate(['/expert-page']);
    }
  }

  logout() {
    this.loggedIn.next(false);
    this.router.navigate(['/']);
  }
}
