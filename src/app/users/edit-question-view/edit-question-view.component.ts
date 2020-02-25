import { Component, OnInit, ElementRef, ViewChild, Input } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { HttpClient } from '@angular/common/http';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { FormControl, FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
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
import { Question } from 'src/app/models/Question';
import { QuestionService } from 'src/app/services/question.service';
import { Tag } from 'src/app/models/Tag';


@Component({
  selector: 'app-edit-question-view',
  templateUrl: './edit-question-view.component.html',
  styleUrls: ['./edit-question-view.component.css']
})
export class EditQuestionViewComponent implements OnInit {
  @Input() question: Question;
  //STIFF

  visible = true;
  selectable = true;
  removable = true;
  separatorKeysCodes: number[] = [ENTER, COMMA];
  tagCtrl = new FormControl();
  filteredTags: Observable<string[]>;
  allTags: string[] = [];
  tagList: Tag[] = [];
  tags: string[] = [];
  cleanMarkdown = true;

  // image file
  selectedFile: File = null;

  options: Markdownoptions = new Markdownoptions();
  public mode = 'editor';

  @ViewChild('tagInput', { static: false }) tagInput: ElementRef<HTMLInputElement>;
  @ViewChild('auto', { static: false }) matAutocomplete: MatAutocomplete;
  @ViewChild('formDirective', { static: false }) formDirective: NgForm;

  questionForm: FormGroup = this.fb.group({
    id: [''],
    head: ['', Validators.required],
    body: ['', Validators.required],
  });

  constructor(
    private ts: TagService,
    private _snackBar: MatSnackBar,
    private router: Router,
    private http: HttpClient,
    private authService: AuthService,
    private questionService: QuestionService,
    private fb: FormBuilder,
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
        this.tagList.push(tag);
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
      this.allTags.push(tag);       //adds deselected tags back to the list of options
    }
  }

  // Select tag, add chip, and remove from the list of options
  selected(event: MatAutocompleteSelectedEvent): void {
    this.tags.push(event.option.viewValue);
    this.allTags.splice(this.allTags.indexOf(event.option.viewValue), 1);
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
  submitQuestion= function() {
        //adds chosen tags to the form
    this.questionForm.addControl('tagList', new FormControl(this.tags));

        //form mapped to custom class, backend not set up to recieve form objects
        //work around, since Question model is an interface
    let question: AskQuestion = new AskQuestion();
    question.questionerId = this.authService.account.id;
    question.body = this.questionForm.value['body'];
    question.head = this.questionForm.value['head'];
    question.tagList = this.tags;

    this.questionService.saveQuestion(question).subscribe((resp) => {
      // uploads the picture with form if there is one
      if (this.selectedFile !== null) {
        this.onUpload(resp.id);
      }
      // clears the form
      this.clearForm();
      // custom snackbar message
      this._snackBar.open('Your question is submitted!', 'OK!', { duration: 3000 });
    },
    failed => {
      this._snackBar.open('Your question failed to submit!', 'OK', { duration: 3000 });
    });
  /*
    // POST-ing the form
    this.http.post(environment.questionsUri, question)
      .subscribe(
        
      */
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

  // clears the form, chips(tags) and selected file of image
  clearForm() {
    this.questionForm.reset();
    this.formDirective.resetForm();
    this.cleanMarkdown = false;
    this.tags = [];
    this.selectedFile = null;
    setTimeout(() =>
      this.cleanMarkdown = true);
  }








  //STIFF 

  ngOnInit() {
    for (let tag of this.question.associatedTags) {
      this.tags.push(tag.name);
    }
  }

  update() {
    this.question.associatedTags = [];
    for (let tag of this.tagList) {
      for (let selection of this.tags) {
        if (tag.name === selection) {
          this.question.associatedTags.push(tag);
        }
      }
    }
    this.questionService.updateQuestion(this.question).subscribe((resp)=>{
      if(resp){
        this.returnToQuestion();
      }   
    });
  }

  returnToQuestion() {
    this.router.navigate([`/question/${this.question.id}`]);
  }

}

class AskQuestion {
  questionerId: number;
  head: string;
  tagList: any;
  body: string;
};