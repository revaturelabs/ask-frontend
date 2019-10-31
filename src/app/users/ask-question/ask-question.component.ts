import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {FormControl, FormGroup, FormBuilder} from '@angular/forms';
import {MatAutocompleteSelectedEvent, MatAutocomplete} from '@angular/material/autocomplete';
import {MatChipInputEvent} from '@angular/material/chips';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { JsonPipe } from '@angular/common';
import { TagService } from 'src/app/services/tags.service';
import { environment } from 'src/environments/environment'

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
const qUrl = environment.tagsUri;

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

  @ViewChild('tagInput', {static: false}) tagInput: ElementRef<HTMLInputElement>;
  @ViewChild('auto', {static: false}) matAutocomplete: MatAutocomplete;

  constructor(private fb: FormBuilder, private ts: TagService) {
    this.filteredTags = this.tagCtrl.valueChanges.pipe(
        startWith(null),
        map((tag: string | null) => tag ? this._filter(tag) : this.allTagsFromServer.slice()));
    this.ts.getTags().subscribe((tags) => {
      
        for (let index = 0; index < tags.length; index++) {
          this.allTagsFromServer.push(tags[index].tagName);
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
      //Prevents inputing chips that is not on the list
      if ((value || '').trim()) {
        if (!this.allTagsFromServer.includes(value)) {
          alert("Tag not recognized!")
        } 
        else {
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

    return this.allTagsFromServer.filter(tag => tag.toLowerCase().indexOf(filterValue) === 0);
  }

  questionInput: Object = {
    "title": null,
    "tags": null,
    "question": null,
  }

  submitQuestion = function(event, qTitle, qTags, qQuestion) {
    console.log('submit question reached');
    event.preventDefault();
    this.questionInput.title = qTitle;
    this.questionInput.tags = this.tags;
    this.questionInput.question = qQuestion;
    console.log(this.questionInput);
    console.log(this.tags);
    console.log(this.ts.getTags())
  }


  ngOnInit() {
    this.form = this.fb.group({
      title: [''],
      tags: [''],
      question: ['']
    });
    this.ts.getTags();
  }

}