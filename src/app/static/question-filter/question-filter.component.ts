import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {Component, OnInit, ElementRef, ViewChild} from '@angular/core';
import {FormControl} from '@angular/forms';
import {MatAutocompleteSelectedEvent, MatAutocomplete} from '@angular/material/autocomplete';
import {MatChipInputEvent} from '@angular/material/chips';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

/**
 * @title Chips Autocomplete
 * @author Borko Stankovic
 */
@Component({
  selector: 'app-question-filter',
  templateUrl: './question-filter.component.html',
  styleUrls: ['./question-filter.component.css']
})
export class QuestionFilterComponent implements OnInit {
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

  constructor() {
    this.filteredTags = this.tagCtrl.valueChanges.pipe(
        startWith(null),
        map((tag: string | null) => tag ? this._filter(tag) : this.allTagsFromServer.slice()));
    // this.ts.getTags().subscribe((tags) => {

    //       for (let index = 0; index < tags.length; index++) {
    //         this.allTagsFromServer.push(tags[index].tagName);
    //       }

    //       console.log(this.allTagsFromServer);
    //   });

      }

  add(event: MatChipInputEvent): void {
    // Add tag only when MatAutocomplete is not open
    // To make sure this does not conflict with OptionSelected Event
    if (!this.matAutocomplete.isOpen) {
      const input = event.input;
      const value = event.value;

      // Add our tag
      // Prevents inputing chips that is not on the list
      if ((value || '').trim()) {
        if (!this.allTagsFromServer.includes(value)) {
          alert('Tag not recognized!')
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

    return this.allTagsFromServer.filter(fruit => fruit.toLowerCase().indexOf(filterValue) === 0);
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

