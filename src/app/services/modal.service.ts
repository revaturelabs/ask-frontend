import { Injectable, OnChanges, Input } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import { AskQuestionComponent } from 'src/app/users/ask-question/ask-question.component';


@Injectable({
  providedIn: 'root'
})
export class ModalService {

  constructor(private authService: AuthService, private dialog: MatDialog) { }

  openAsk(): void {
    let dialogRef = this.dialog.open(AskQuestionComponent, {
      width: '1000px',
    });


    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}
