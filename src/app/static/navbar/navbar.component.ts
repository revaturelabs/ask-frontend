import { Component, OnInit, Inject } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { Router } from '@angular/router';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { AskQuestionComponent } from 'src/app/users/ask-question/ask-question.component';

export interface DialogData {
  //message to specify success or failure of Modal
  message: string;
}

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  
  constructor(private authService: AuthService, private dialog: MatDialog, private router: Router) {}

  //declared in interface, set by modal dialog
  message: string;

  ngOnInit() {}

  openDialog(): void {
    let dialogRef = this.dialog.open(AskQuestionComponent, {
      width: '1000px',
      //data: {message: this.message}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      //this.message = result;
    });
  }

  onLogout() {
    this.authService.userLogOut();
  }

  yourProfile(){
    this.router.navigate(['profile', this.authService.account.id]);
  }
}
