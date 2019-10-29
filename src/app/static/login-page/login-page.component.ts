import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
})
export class LoginPageComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  userLogin() {
    this.router.navigate(['/user-page']);
  }

  expertLogin() {
    this.router.navigate(['/expert-page']);
  }
}

