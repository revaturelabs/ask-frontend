import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';

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
   *  then logs in as that user.  Stand-in functionality
   *
   * @param id The id of the user to login as
   */
  onSubmit(id: number) {
    this.authService.attemptLogin(id);
  }

}