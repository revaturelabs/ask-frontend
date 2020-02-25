import { Injectable } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import {MatDialog} from '@angular/material/dialog';
import { AskQuestionComponent } from 'src/app/users/ask-question/ask-question.component';
import { SettingsComponent } from '../experts/settings/settings.component';
import { SelfTagsComponent } from '../experts/self-tags/self-tags.component';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  constructor(private authService: AuthService, private dialog: MatDialog) { }

  openAsk(): void {
    let dialogRef = this.dialog.open(AskQuestionComponent, {
      width: '1000px',
    });
  }

  openSettings(): void {
    let dialogRef = this.dialog.open(SettingsComponent, {
      width: '800px',
      height: '750px',
    });
  }

  openSelfTags(): void {
    let diaglogRef = this.dialog.open(SelfTagsComponent, {
      width: '800px',
      height: '750px',
    })
  }

}
