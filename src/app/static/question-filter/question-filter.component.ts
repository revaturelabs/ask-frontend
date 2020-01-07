import { COMMA, ENTER } from '@angular/cdk/keycodes';
import {
  Component,
  ElementRef,
  ViewChild,
  OnInit,
  Output,
  EventEmitter,
} from '@angular/core';
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
import { Router } from '@angular/router';

//Snack-bar import, (materials alert-alike) for "Tag not recognized!"
import { MatSnackBar } from '@angular/material/snack-bar';
import { QuestionService } from 'src/app/services/question.service';

/**
 * @title Filter questions
 * @author Borko Stankovic, Kyung Min Lee, Jonathan Gworek
 */

@Component({
  selector: 'app-question-filter',
  templateUrl: './question-filter.component.html',
  styleUrls: ['./question-filter.component.css'],
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
  requireAll: string = '?requireAll=false';
  filteredUri: string;
  filterTags: string[];
  filteredStatus: boolean = false;

  @Output() newFilteredStatus: EventEmitter<boolean> = new EventEmitter();
  @Output() newFilteredUri: EventEmitter<string> = new EventEmitter();

  @ViewChild('tagInput', { static: false }) tagInput: ElementRef<
    HTMLInputElement
  >;
  @ViewChild('auto', { static: false }) matAutocomplete: MatAutocomplete;

  constructor(
    private fb: FormBuilder,
    private ts: TagService,
    private _snackBar: MatSnackBar,
    private http: HttpClient,
    private questionService: QuestionService,
    private router: Router,
  ) {
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
          this._snackBar.open(
            'Tag not recognized! Please choose from the list.',
            'OK, I will',
            { duration: 4000 },
          );
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

  // Uri format for local host tags are case sensitive
  // get all questions that hava tag Java
  // http://localhost:1337/questions/search/?requireAll=false&tag=Java
  createFilteredQuestionsUri() {
    this.filteredStatus = true;
    this.newFilteredStatus.emit(this.filteredStatus);
    let tags: String = '';
    this.filterTags = this.tags;
    for (var i = 0; i < this.filterTags.length; i++) {
      tags += '&tag=' + this.filterTags[i];
    }
    (this.filteredUri =
      environment.questionsUri + '/search/' + this.requireAll + tags),
      this.newFilteredUri.emit(this.filteredUri);
  }

  hasBeenFiltered() {
    return this.filteredStatus;
  }

  resetSearch() {
    this.filteredStatus = false;
    this.newFilteredStatus.emit(this.filteredStatus);
  }

  ngOnInit() {}
}
