import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { MatAutocompleteSelectedEvent,
  MatAutocomplete,} from '@angular/material/autocomplete';
import { MatChipInputEvent } from '@angular/material/chips';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { TagService } from 'src/app/services/tags.service';
// Snack-bar import, (materials alert-alike) for "Tag not recognized!"
import { MatSnackBar } from '@angular/material/snack-bar';
// Markdowns
import { Markdownoptions } from 'src/app/models/markdownoptions';
import { QuestionService } from 'src/app/services/question.service';
import { AuthService } from 'src/app/services/auth/auth.service';

/**
 * @title Ask Question
 * @author Kyung Min Lee, Nathan Cross, Nick Brinson
 *
 * The current typescript is for Angular Material forms with autocomplete chips & two fields.
 *
 * This component is built on top of an example found at:
 * https://material.angular.io/components/chips/overview
 */

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
  separatorKeysCodes: number[] = [ENTER, COMMA];
  tagCtrl = new FormControl();
  filteredTags: Observable<string[]>;
  allTags: string[] = [];
  tags: string[] = [];
  cleanMarkdown = true;

  // image file
  selectedFile: File = null;

  options: Markdownoptions = new Markdownoptions();
  public mode = 'editor';

  @ViewChild('tagInput', { static: false }) tagInput: ElementRef<HTMLInputElement>;
  @ViewChild('auto', { static: false }) matAutocomplete: MatAutocomplete;

  questionInput: Object = {
    questionerId: null,
    head: null,
    tagList: null,
    body: null,
  };

  constructor(
    private fb: FormBuilder,
    private ts: TagService,
    private _snackBar: MatSnackBar,
    private questionService:QuestionService,
    private authService: AuthService
  ) {
    this.filteredTags = this.tagCtrl.valueChanges.pipe(
      startWith(null),
      map((tag: string | null) =>
        tag ? this._filter(tag) : this.allTags.slice(),
      ),
    );
    this.ts.getTags().subscribe(tags => {
      for (let tag of tags) {
        this.allTags.push(tag.name);
      }
    });
    this.options.hideIcons = ['FullScreen'];
    this.options.showPreviewPanel = false;
  }

  add(event: MatChipInputEvent): void {
    // Add tag only when MatAutocomplete is not open
    // To make sure this does not conflict with OptionSelected Event
      const input = event.input;
      const value = event.value;

      // Add our tag
      if ((value || '').trim()) {
        // Preventing user inputting chips(tags) that are not in the list from the server
        if (!this.allTags.includes(value)) {
            this._snackBar.open(
              'Tag not recognized! Please choose from the list.',
              'OK',
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

  remove(tag: string): void {
    const index = this.tags.indexOf(tag);

    if (index >= 0) {
      this.tags.splice(index, 1);
      this.allTags.push(tag);
    }
  }

   // Select tag, add chip, and remove from the list of options
  selected(event: MatAutocompleteSelectedEvent): void {
    this.tags.push(event.option.viewValue);
    this.allTags.splice(this.allTags.indexOf(event.option.viewValue),1);
    this.tagInput.nativeElement.value = '';
    this.tagCtrl.setValue(null);
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.allTags.filter(
      tag => tag.toLowerCase().indexOf(filterValue) === 0,
    );
  }

  // selected image
  onFileSelected(event) {
    event.preventDefault();
    this.selectedFile = event.target.files[0] as File;
  }

  // Submit Question
  submitQuestion = function(event, head, tagList, body) {
    event.preventDefault();
    this.questionInput.questionerId = this.authService.account.id;
    this.questionInput.head = head;
    this.questionInput.tagList = tagList;
    this.questionInput.body = body;

    // Validating if title or question body is empty
    if (head.trim() === '') {
      this._snackBar.open('Please enter a title', 'OK', { duration: 4000 });
    } else if (body.trim() === '') {
      this._snackBar.open('Please enter a question', 'OK', { duration: 4000 });
    } else {
      // POST-ing the form
      this.questionService.saveQuestion(this.questionInput).subscribe(
        response => {
        // uploads the picture with form if there is one
        if (this.selectedFile !== null) {
         this.onUpload(response.id);
           }
        // clears the form
        this.clearForm();
        // custom snackbar message
        this._snackBar.open('Your question is submitted!', 'OK!', {duration: 3000});
      },
      failed => {
        this._snackBar.open('Your question failed to submit!', 'OK', {duration: 3000});
      });
    }
  };

  // submitting the images
  onUpload(questionId) {
    const formData = new FormData();
    formData.append('image', this.selectedFile, this.selectedFile.name);
    this.questionService.uploadQuestionImage(questionId, formData)
      .subscribe(response => {
        console.log('Image successfully uploaded with the question');
      },
      (err) => {
        console.log('Image upload was unsuccessful' + err);
      });
  }

  ngOnInit() {
    this.clearForm();
  }

  // clears the form, chips(tags) and selected file of image
  clearForm() {
    this.form = this.fb.group({
      questionerId: null,
      head: [''],
      tagList: [''],
      body: [''],
    });
    this.cleanMarkdown = false;
    this.tags = [];
    this.selectedFile = null;
    setTimeout(() =>
      this.cleanMarkdown = true, );
  }
}
