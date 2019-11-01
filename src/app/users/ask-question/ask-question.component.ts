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
import { JsonPipe } from '@angular/common';
import { TagService } from 'src/app/services/tags.service';
import { environment } from 'src/environments/environment';

//Snack-bar import, (materials alert-alike) for "Tag not recognized!"
import {MatSnackBar} from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';



// import { PostService } from '../../services/post.service';
// import { Post } from '../../models/Post';

/**
 * @author: Kyung Min Lee, Nathan Cross, Nick Brinson
 * The current typescript is for Angular Material forms with autocomplete chips & two fields.
 *
 * This component is built on top of an example found at:
 * https://material.angular.io/components/chips/overview
 */

// const qUrl = "http://ec2-54-80-244-190.compute-1.amazonaws.com:1337/question";
const qUri = environment.tagsUri;

@Component({
  selector: 'app-ask-question',
  templateUrl: './ask-question.component.html',
  styleUrls: ['./ask-question.component.css'],
})
export class AskQuestionComponent implements OnInit {

  // submitQuestionUri = "http://ec2-54-80-244-190.compute-1.amazonaws.com:1337/questions/create";

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

      console.log(this.allTagsFromServer);
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

        // for (let index = 0; index < this.tags.length + 1; index ++) {
        //   if (value == this.tags[index]) {
        //     alert('No duplicate tags!');
        //   }
        // }

        //Preventing user inputing chips(tags) that are not in the list from the server
        if (!this.allTagsFromServer.includes(value)) {
          
          this._snackBar.open("Tag not recognized!", "OK, i will fix it", {duration: 2000,});
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
    tags: null,
    body: null,
  };

  submitQuestion = function(event, head, qTags, body) {
    event.preventDefault();
    this.questionInput.head = head;
    this.questionInput.tags = this.tags;
    this.questionInput.body = body;
    console.log(this.questionInput);
    console.log(this.tags);
    // console.log(this.ts.getTags());
    
    this.http.post(environment.createQuestionUri, this.questionInput).subscribe(
			(response => {
        console.log("THE RESPONSEEEEEEEEEE: " + response);
				if (response.statusCode === "OK") {
					alert("Posting successful!");
					window.location.reload();
				} else {
					alert("Posting a question was unsuccessful.");
				}
			})
		);

  };

  ngOnInit() {
    this.form = this.fb.group({
      head: [''],
      tags: [''],
      body: [''],
    });
    this.ts.getTags();
  }
}