import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/models/User';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';
import { UserService } from 'src/app/services/user.service';
import { switchMap } from 'rxjs/operators';

/*
 TODOS: Routing to other people's profiles
        Better Styling/CSS
        Interests Added
        Questions Displayed
        AMAs for experts displayed
*/

@Component({
  selector: 'app-profile-user',
  templateUrl: './profile-user.component.html',
  styleUrls: ['./profile-user.component.css']
})
export class ProfileUserComponent implements OnInit {

  init: User;
  idLoggedIn: number;
  isLoaded: boolean = false;

  constructor(private authService: AuthService, private userService: UserService, private route: ActivatedRoute) { }

  in() {
    this.route.paramMap.pipe(switchMap((params: ParamMap) => this.userService.getUserById(+params.get('id')))).subscribe((data:User) =>{
      this.init = data;
      this.isLoaded = true;
    })
    this.idLoggedIn = this.authService.account.id;
  }

  ngOnInit() {
    this.in();
  }

}