import { Component, OnInit, Input, Output, AfterViewInit, AfterViewChecked, ChangeDetectorRef, EventEmitter } from '@angular/core';
import { Response } from '../../models/Response';
import { ResponseService } from 'src/app/services/response.service';
import { AuthService } from '../../services/auth/auth.service';
import { environment } from '../../../environments/environment';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Tag } from '../../models/Tag';
import { QuestionService } from 'src/app/services/question.service';

@Component({
  selector: 'app-response',
  templateUrl: './response.component.html',
  styleUrls: ['./response.component.css'],
})
export class ResponseComponent implements OnInit, AfterViewChecked {
  @Input() response: Response;
  @Input() highlightable: boolean;
  @Output() highlighted = new EventEmitter<boolean>();

  responderName: string;
  expertTags = [];
  hoverToggle = false;

  // stores expert tags that don't fit on the response element to be shown in popover
  hiddenExpertTags: Tag[];

  // represents how many skills from the skillset can fit across the response
  limit = this.expertTags.length;

  env = environment.questionsUri;

  constructor(
    private _snackBar: MatSnackBar,
    private responseService: ResponseService,
    private cdRef: ChangeDetectorRef,
  ) { }

  highlightResponse(selectedResponse) {
    this.responseService.highlightResponse(this.response.questionId, selectedResponse)
      .subscribe(
        data => {
          this.highlighted.emit(true);
          this._snackBar.open('Highlighted Answer', 'OK', {
            duration: 2000,
          });
        },
        error => {
          this._snackBar.open('Highlight unsuccessful', 'OK', {
            duration: 3000,
          });
        },
      );
    this.resizedPage();
  }

  showTagsList(startIndex: number) {
    const tagsList = [];
    for (let i = startIndex; i < this.expertTags.length; i++) {
      tagsList.push(this.expertTags[i]);
    }
    this.hiddenExpertTags = tagsList;
  }

  ngOnInit() {
    this.responseService.getResponseById(this.response.id).subscribe(result => {
      this.responderName = result.user.username;
      this.expertTags = result.user.expertTags;
    });
    this.hiddenExpertTags = [];
  }

  // using this angular lifecycle method in conjunction with the setTimeout
  // allows the page to load the view before resizedPage checks the width of
  // elements in the DOM. it can't get these widths until the view is checked.
  ngAfterViewChecked() {
    this.resizedPage();
    this.cdRef.detectChanges();
  }

  // this is called both after the view check by angular and every time the page
  // is resized by the user
  resizedPage() {
    // these represent the actual entire response element and get the width so
    // that we can find how much room is available to display skills on one line
    const respDiv = document.getElementById('responseCard_' + this.response.id) as HTMLDivElement;
    let responseWidth;

    if (respDiv) {
      if (respDiv.offsetWidth) {
        responseWidth = respDiv.offsetWidth;
      }
    }

    // this represents the text that shows the name of the expert who posted the
    // response and signifies their skillset "Zach Marshello's skillset:"
    const respName = document.getElementById('nameForSkillset') as HTMLElement;

    // this represents, cumulatively, about how wide the skill chips are
    let chipWidth = 0;

    // these are constants representing extra space around/between chips
    const padding = 8;
    const margin = 4;

    // this is the average width in pixels of a character in a chip
    const letter = 8;

    // this is the average width of the "+2" chip, not that important but
    // prevents this chip from being pushed alone to the next line.
    const plusHidden = 40;

    let index = 0;
    this.limit = this.expertTags.length;

    let roomForSkills;

    if (respName) {
      if (respName.offsetWidth) {
        roomForSkills = (responseWidth - respName.offsetWidth - plusHidden);
        for (const et of this.expertTags) {
          chipWidth += ((et.name.length * letter) + padding + margin);
          if (chipWidth < roomForSkills) {
            index++;
          } else {
            this.hiddenExpertTags.push(et);
          }
        }
        this.limit = index;
      }
    }
    this.showTagsList(index);
  }
}