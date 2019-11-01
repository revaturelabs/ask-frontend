import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {

  

  constructor(private authService: AuthService) {}

  ngOnInit() {
    console.log(this.authService.isLoggedIn)
  }

  onLogout() {
    this.authService.userLogOut();
  }
}
