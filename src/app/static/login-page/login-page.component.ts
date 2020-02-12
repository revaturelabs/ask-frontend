import { Component, OnInit } from '@angular/core';
import { User } from '../../models/User';
import { AuthService } from 'src/app/services/auth/auth.service';
import { environment } from '../../../environments/environment';
import { Account } from '../../models/Account';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
})
export class LoginPageComponent implements OnInit {
  constructor(private authService: AuthService) {}

  ngOnInit() {}

  /**
   * Takes the id of a user and sends a GET, request for that user to the server,
   *  then logs in as that user. 
   *
   * @param id The id of the user to login as
   */
  // onSubmit(id: number) {
  //   this.authService.userLogin(id);
  // }

  onSubmit(id: number) {
    this.http
      .get<Account>(`${environment.userUri}/${id}`)
      .subscribe((account: Account) => {
        this.authService.userLogin(account);
      });
    this.authService.userLogin(id);
  }
}
