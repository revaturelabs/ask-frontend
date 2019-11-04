import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import {
  MatAutocompleteSelectedEvent,
  MatAutocomplete,
} from '@angular/material/autocomplete';
import { MatChipInputEvent } from '@angular/material/chips';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { TagService } from 'src/app/services/tags.service';
import { environment } from 'src/environments/environment';

import { HttpClient } from '@angular/common/http';

//Snack-bar import, (materials alert-alike) for "Tag not recognized!"
import {MatSnackBar} from '@angular/material/snack-bar';


/**
 * @author: Kyung Min Lee, Nathan Cross, Nick Brinson
 * 
 * The current typescript is for Angular Material forms with autocomplete chips & two fields.
 *
 * This component is built on top of an example found at:
 * https://material.angular.io/components/chips/overview
 */

const qUri = environment.tagsUri;

@Component({
  selector: 'app-ask-question',
  templateUrl: './ask-question.component.html',
  styleUrls: ['./ask-question.component.css'],
})
export class AskQuestionComponent implements OnInit {
  form: FormGroup;
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  separatorKeysCodes: number[] = [ENTER, COMMA];
  tagCtrl = new FormControl();
  filteredTags: Observable<string[]>;
  tags: string[] = [];
  allTagsFromServer: string[] = [];

  @ViewChild('tagInput', { static: false }) tagInput: ElementRef<
    HTMLInputElement
  >;
  @ViewChild('auto', { static: false }) matAutocomplete: MatAutocomplete;

  constructor(private fb: FormBuilder, private ts: TagService, private _snackBar: MatSnackBar, private http: HttpClient) {
    this.filteredTags = this.tagCtrl.valueChanges.pipe(
      startWith(null),
      map((tag: string | null) =>
        tag ? this._filter(tag) : this.allTagsFromServer.slice(),
      ),
    );
    this.ts.getTags().subscribe(tags => {
      for (let index = 0; index < tags.length; index++) {
        this.allTagsFromServer.push(tags[index].name);
      }
    });
  }

  add(event: MatChipInputEvent): void {
    // Add tag only when MatAutocomplete is not open
    // To make sure this does not conflict with OptionSelected Event
    if (!this.matAutocomplete.isOpen) {
      const input = event.input;
      const value = event.value;

      // Add our tag
      if ((value || '').trim()) {
        //Preventing user inputing chips(tags) that are not in the list from the server
        if (!this.allTagsFromServer.includes(value)) {
          //Angular Material Snack-bar
          this._snackBar.open("Tag not recognized! Please choose from the list.", "OK, I will", {duration: 4000});
        } else {
          this.tags.push(value.trim());
        }
      }

      // Reset the input value
      if (input) {
        input.value = '';
      }

      this.tagCtrl.setValue(null);
    }
  }

  remove(tag: string): void {
    const index = this.tags.indexOf(tag);

    if (index >= 0) {
      this.tags.splice(index, 1);
    }
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.tags.push(event.option.viewValue);
    this.tagInput.nativeElement.value = '';
    this.tagCtrl.setValue(null);
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.allTagsFromServer.filter(
      tag => tag.toLowerCase().indexOf(filterValue) === 0,
    );
  }

  questionInput: Object = {
    head: null,
    tagList: null,
    body: null,
  };

  //Submit Question
  submitQuestion = function(event, head, tagList, body) {
    event.preventDefault();
    this.questionInput.head = head;
    this.questionInput.tagList = this.tags;
    this.questionInput.body = body;

    //Validating if title or question body is empty
    if (head.trim() === "") {
      this._snackBar.open("Title must not be empty or spaces", "OK", {duration: 4000});
    } else if (body.trim() === "") {
      this._snackBar.open("Question body must not be empty or spaces", "OK", {duration: 4000});
    } else {
      //POST-ing the form
      this.http.post(environment.createQuestionUri, this.questionInput).subscribe(
			response => {
        window.location.reload();
        this._snackBar.open("Your question is submitted!", "OK!", {duration: 3000});
      }, 
      failed => {
        this._snackBar.open("Your question failed to submit!", "OK", {duration: 3000});
      })};
  };

  ngOnInit() {
    this.form = this.fb.group({
      head: [''],
      tagList: [''],
      body: [''],
    });
    this.ts.getTags();
  }
}
