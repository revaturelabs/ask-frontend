import { Component, OnInit, ElementRef, ViewChild, Input } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { HttpClient } from '@angular/common/http';
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
// Snack-bar import, (materials alert-alike) for "Tag not recognized!"
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
// Markdowns
import { Markdownoptions } from 'src/app/models/markdownoptions';

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
  addOnBlur = true;
  separatorKeysCodes: number[] = [ENTER, COMMA];
  tagCtrl = new FormControl();
  filteredTags: Observable<string[]>;
  tags: string[] = [];
  allTagsFromServer: string[] = [];

  // image file
  selectedFile: File = null;

  options: Markdownoptions = new Markdownoptions();
  public mode = 'editor';

  @ViewChild('tagInput', { static: false }) tagInput: ElementRef<
    HTMLInputElement
  >;
  @ViewChild('auto', { static: false }) matAutocomplete: MatAutocomplete;
  @ViewChild('fileInput', { static: false }) fileInput: ElementRef<HTMLInputElement>;

  constructor(
    private fb: FormBuilder,
    private ts: TagService,
    private _snackBar: MatSnackBar,
    private http: HttpClient,
    private authService: AuthService,
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
    this.options.hideIcons = ['FullScreen'];
    this.options.showPreviewPanel = false;
  }

  add(event: MatChipInputEvent): void {
    // Add tag only when MatAutocomplete is not open
    // To make sure this does not conflict with OptionSelected Event
    if (!this.matAutocomplete.isOpen) {
      const input = event.input;
      const value = event.value;

      // Add our tag
      if ((value || '').trim()) {
        //Preventing user inputting chips(tags) that are not in the list from the server
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

  questionInput: Object = {
    questionerId: null,
    head: null,
    tagList: null,
    body: null,
  };

  //selected image
  onFileSelected(event) {
    event.preventDefault();
    this.selectedFile = <File>event.target.files[0];
  }

  //Submit Question
  submitQuestion = function(event, head, tagList, body) {
    event.preventDefault();
    this.questionInput.questionerId = this.authService.account.id;
    this.questionInput.head = head;
    this.questionInput.tagList = this.tags;
    this.questionInput.body = body;

    //Validating if title or question body is empty
    if (head.trim() === '') {
      this._snackBar.open('Please enter a title', 'OK', { duration: 4000 });
    } else if (body.trim() === '') {
      this._snackBar.open('Please enter a question', 'OK', { duration: 4000 });
    } else {
      //POST-ing the form
      this.http.post(environment.questionsUri, this.questionInput).subscribe(

			response => {
        //uploads the picture with form if there is one
        if (this.selectedFile !== null) {
          this.onUpload(response.id);
        }
        //clears the form
        this.clearForm();
        //custom snackbar message
        this._snackBar.open("Your question is submitted!", "OK!", {duration: 3000});
      }, 
      failed => {
        this._snackBar.open("Your question failed to submit!", "OK", {duration: 3000});
      })};
  };

  sendImage() {

  }

  //submitting the images
  onUpload(questionId) {
    event.preventDefault();
    const formData = new FormData();
    formData.append('image', this.selectedFile, this.selectedFile.name);
    this.http.put(`${environment.questionsUri}/${questionId}/images`, formData)
      .subscribe(response => {
        console.log("Image successfully uploaded with the question");
        //clears the image name of input field
        this.fileInput.nativeElement.value = '';
      },
      (err) => {
        console.log("Image upload was unsuccessful" + err);
      });
  }

  ngOnInit() {
    this.clearForm();
  }

  //clears the form, chips(tags) and selected file of image
  clearForm() {
    this.form = this.fb.group({
      questionerId: null,
      head: [''],
      tagList: [''],
      body: [''],
    });
    this.tags = [];
    this.selectedFile = null;
  }
}
