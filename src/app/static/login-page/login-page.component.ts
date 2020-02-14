import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { HttpClient } from '@angular/common/http';
import { Account } from '../../models/Account';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
})
export class LoginPageComponent implements OnInit {
  constructor(private http: HttpClient, private authService: AuthService) {}

  ngOnInit() {}

  /**
   * Takes the id of a user and sends a GET, request for that user to the server,
   *  then logs in as that user.  Stand-in functionality
   *
   * @param id The id of the user to login as
   */
  onSubmit(id: number) {
    this.authService.getAccountById(id)
      .subscribe((account: Account) => {
        this.authService.userLogin(account);
      });
  }
}
