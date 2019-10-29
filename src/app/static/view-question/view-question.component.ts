import { Component, OnInit } from '@angular/core';
import { ResponseService } from '../../services/response.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-view-question',
  templateUrl: './view-question.component.html',
  styleUrls: ['./view-question.component.css'],
})
export class ViewQuestionComponent implements OnInit {
  allResponses: any[];

  constructor(private responseService: ResponseService) {}

  ngOnInit() {
    this.allResponses = [];
    this.responseService.getResponses().subscribe(
      (response) => {
        for (let r in response) {
          this.allResponses.push(response[r]);
        }
      }
    )
  }
}
