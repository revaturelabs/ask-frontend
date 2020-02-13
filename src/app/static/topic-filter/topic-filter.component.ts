import { Component, OnInit, Output, ViewChild, EventEmitter, ElementRef } from '@angular/core';
import { COMMA, ENTER } from '@angular/cdk/keycodes'
import { FormControl, FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';
import { MatAutocomplete, MatSnackBar } from '@angular/material';
import { TagService } from 'src/app/services/tags.service';
import { HttpClient } from '@angular/common/http';
import { QuestionService } from 'src/app/services/question.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-topic-filter',
  templateUrl: './topic-filter.component.html',
  styleUrls: ['./topic-filter.component.css']
})
export class TopicFilterComponent implements OnInit {
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  separatorKeysCodes: number[] = [ENTER, COMMA];
  tagCtrl = new FormControl();
  filteredTags: Observable<string[]>;
  filtTags: string[] = [];
  tags: string[] = [];
  allTagsFromServer: string[] = [];
  requireAll: string = '?requireAll=false';
  filteredUri: string;
  filterTags: string[];
  filteredStatus: boolean = false;

  @Output() newFilteredStatus: EventEmitter<boolean> = new EventEmitter();
  @Output() newFilteredUri: EventEmitter<string> = new EventEmitter();

  @ViewChild('tagInput', { static: false }) tagInput: ElementRef<HTMLInputElement>;
  @ViewChild('auto', { static: false }) matAutocomplete: MatAutocomplete;

  constructor(private fb: FormBuilder,
    private ts: TagService,
    private _snackBar: MatSnackBar,
    private http: HttpClient,
    private questionService: QuestionService,
    private router: Router) { }

  ngOnInit() {
  }

}
