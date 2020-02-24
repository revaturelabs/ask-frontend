import { Component } from '@angular/core';
import { AuthService } from './services/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  isLoggedIn : boolean;

  constructor(public authService: AuthService) {
  }

  getLoggedIn(){
    this.isLoggedIn = this.authService.isLoggedIn;
    return this.isLoggedIn;
  }

  onLogout() {
    this.authService.userLogOut();
  }
}