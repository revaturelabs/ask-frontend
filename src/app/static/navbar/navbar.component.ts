import { Component, OnInit } from '@angular/core';
import { AskQuestionComponent } from 'src/app/users/ask-question/ask-question.component';
import { AuthService } from '../../services/auth/auth.service';
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  constructor(private modal: ModalService, private authService: AuthService) {}

  ngOnInit() {}

  openDialog(): void {
    this.modal.openAsk();
  }

  onLogout() {
    this.authService.userLogOut();
  }
}
