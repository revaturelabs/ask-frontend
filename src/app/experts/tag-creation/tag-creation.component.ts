import { Component, OnInit, Injectable, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Tag } from '../../models/Tag';
import { environment } from '../../../environments/environment';
import { MatSnackBar} from '@angular/material/snack-bar';
import { SelfTagsComponent } from '../self-tags/self-tags.component';



/**
 * @author: Zach Marshello, Alec Thavychith, Nick Brinson
 * 
 * Expert input new tag and click submit. POST request is created, and response is handled 
 * based on success or failure. Submission emits an event for creation of new tag. 
 * 
 */

@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-tag-creation',
  templateUrl: './tag-creation.component.html',
  styleUrls: ['./tag-creation.component.css'],
})

export class TagCreationComponent implements OnInit {
  constructor(
    private http: HttpClient, 
    private snackBar: MatSnackBar, 
    private selfTags: SelfTagsComponent
    ) {}

  @Output() tagCreated: EventEmitter<Tag> = new EventEmitter();
  
  tag: Tag = { id: 0, name: '' };

  ngOnInit() {}



  onSubmit() {
    this.http.post(environment.tagsUri, this.tag).subscribe(
      result => {
        this.tagCreated.emit(this.tag);
        this.tag.name = "";
        this.snackBar.open(`Tag Created`, `OK`, { duration: 2000 });
      },
      error => {
        this.snackBar.open(`Failed to Create Tag`, `OK`, { duration: 2000 });
      },
    );
  }
}
