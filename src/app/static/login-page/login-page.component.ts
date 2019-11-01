import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
})
export class LoginPageComponent implements OnInit {


  constructor(
    private http: HttpClient,
    private router: Router,
    private auth: AuthService,
  ) { }

  ngOnInit() { }
  
  onSubmit(id: number) {
    this.http.get(`${environment.userUri}${id}`)
      .subscribe(
        (account: any) => {
          this.auth.account = account;
          if (this.auth.account) {
            this.auth.userLogin();
            this.router.navigate(['/questions']);
          }
        }
      )

  }

}

