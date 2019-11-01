import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth/auth.service';
import { Account } from 'src/app/models/account';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';

const url = "http://ec2-54-80-244-190.compute-1.amazonaws.com:1337/users";

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
    ) {}


  ngOnInit() {

  }
  authService: AuthService = new AuthService();

  

  onSubmit(id: number) {
    console.log(id)
    this.http.get(`${environment.userUri}${id}`)
      .subscribe(
        (account: any) => {
          this.authService.account = account;
          if(this.authService.account) {
            console.log("Hello");
            this.authService.userLogin();
            this.router.navigate(['/questions']);
          }
        }
      );
      
  }

  // onSub() {
  //   try {
  //     this.router.navigate(['ask']);
  //   }
  //   catch(error) {
  //     console.log("error")
  //   }
  // }


  
}

