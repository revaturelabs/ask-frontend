import { Component, OnInit, Input, AfterViewChecked, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { QuestionService } from '../../services/question.service';
import { Question } from '../../models/Question';
import { Tag } from '../../models/Tag';

/**
 * @author: Alec Thavychith
 *
 * Populating the QuestionListComponent with PreviewQuestionComponents
 *
 */

@Component({
  selector: 'app-preview-question',
  templateUrl: './preview-question.component.html',
  styleUrls: ['./preview-question.component.css'],
})
export class PreviewQuestionComponent implements OnInit, AfterViewChecked {
  @Input() question: Question;
  @Input() tag: Tag;

  // stores associated tags that don't fit on the preview-question element to be shown in popover
  hiddenTags: Tag[];

  // represents how many tags from the tags can fit across the preview-question
  limit: number;

  constructor(
    public router: Router,
    private questionIdService: QuestionService,
    private cdRef: ChangeDetectorRef,
  ) {}

  // On click of the 'View' button, it sets the question ID of the selected question
  viewQuestion = selectQuestionId => {
    // Stores selected question ID in the QuestionService for use in the ViewQuestionComponent
    this.questionIdService.setQuestionId(selectQuestionId);
    this.router.navigate([`/view-question/`]);
  }

  ngOnInit() {
    if (this.question.associatedTags) {
      this.limit = this.question.associatedTags.length;
    }
    this.hiddenTags = [];
  }

  // using this angular lifecycle method allows the page to load the view
  // before resizedPage checks the width of elements in the DOM. it can't get
  // these widths until the view is checked.
  ngAfterViewChecked() {
    this.resizedPage();
    this.cdRef.detectChanges();
  }

  showTagsList(startIndex: number) {
    const tagsList = [];
    for (let i = startIndex; i < this.question.associatedTags.length; i++) {
      tagsList.push(this.question.associatedTags[i]);
    }
    this.hiddenTags = tagsList;
  }

  sethigh() {
    const classes = {
      question: true,
      high: this.question.highlightedResponseId != null
    }
    return classes;
  }

  // this is called both after the view check by angular and every time the page
  // is resized by the user
  resizedPage() {
    // these represent the actual entire response element and get the width so
    // that we can find how much room is available to display skills on one line
    const respDiv = document.getElementById('q1=' + this.question.id) as HTMLDivElement;
    let responseWidth;

    if (respDiv) {
      if (respDiv.offsetWidth) {
        responseWidth = respDiv.offsetWidth;
      }
    }

    // this represents, cumulatively, about how wide the tag chips are
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
    this.limit = this.question.associatedTags.length;

    let roomForSkills;

    roomForSkills = (responseWidth - plusHidden);
    for (const at of this.question.associatedTags) {
      chipWidth += ((at.name.length * letter) + padding + margin);
      if (chipWidth < roomForSkills) {
        index++;
      } else {
        this.hiddenTags.push(at);
      }
    }
    this.limit = index;
    this.showTagsList(index);
  }
}
