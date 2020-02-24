import { Component } from '@angular/core';
import { AuthService } from './services/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  isLoggedIn : boolean;
  isExpert: Boolean;

  constructor(private authService: AuthService) {
  }

  getLoggedIn(){
    this.isLoggedIn = this.authService.isLoggedIn;
    return this.isLoggedIn;
  }

  getUserType(){
    this.isExpert = this.authService.account.expert;
    return this.isExpert;
  }

  onLogout() {
    this.authService.userLogOut();
  }
}