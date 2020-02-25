import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.css']
})
export class PageNotFoundComponent implements OnInit {

  returnString: string;

  constructor(
    private authService : AuthService,
  ) { }

  ngOnInit() {
    this.returnString = this.authService.getQueryParams();
  }

}
