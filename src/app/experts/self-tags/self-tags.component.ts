import { Component, OnInit, Injectable } from '@angular/core';
import { Tag } from '../../models/Tag';
import { TagService } from 'src/app/services/tags.service';
import { AuthService } from 'src/app/services/auth/auth.service';
import { MatSnackBar} from '@angular/material/snack-bar';


/**
 * @author Zach Marshello, Adam Shipe, Nick Brinson
 *
 * Populate list of available tags to associate with expert. Expert checks and unchecks tag names based on his or her skillset.
 * Expert clicks submit to update associated tags in database.
 * Self tags component listens for event emitter from tag creation component to add new tag to tag array.
 * 
 */

@Injectable({
  providedIn: 'root',
})
@Component({
  selector: 'app-self-tags',
  templateUrl: './self-tags.component.html',
  styleUrls: ['./self-tags.component.css'],
})
export class SelfTagsComponent implements OnInit {
  tags: Tag[];
  isChecked: boolean = false;

  expertId = this.authService.account.id;
  expertSkills: string[] = [];
  currentExpert: any;

  constructor(
    private tagService: TagService,
    private authService: AuthService,
    private snackBar: MatSnackBar,
  ) {}

  // Check and uncheck tags use toggle to add and remove tags from list of expert associated tags to be updated
  toggle($event, id) {
    if ($event.checked === true) {
      this.expertSkills.push(id);
    } else {
      //delete the value and close the empty array slot
      this.expertSkills.splice(this.expertSkills.indexOf(id), 1);
    };
  }

  onSubmit() {
    this.tagService
      .saveExpertTags(
        this.expertSkills.map<Tag>(t => {
          return { name: t, id: 0 };
        }),
        this.authService.account.id,
      )
      .subscribe();
      this.snackBar.open(`Tags Updated`, `OK`, { duration: 2000 });
  }

  // For initialization, currentExpert associated tags are prechecked in list of tags
  checkExpertTags() {
    for (let i = 0; i < this.tags.length; i++) {
      this.currentExpert.expertTags.forEach(element => {
        if (element.name == this.tags[i].name) {
          this.toggle({ checked: true }, this.tags[i].name);
          this.tags[i].checked = true;
        } else {
          return false;
        }
      });
    }
  }

  ngOnInit() {
    this.tagService.getTags().subscribe(tags => {
      this.tags = tags;
    });

    this.tagService.getExpertTags(this.expertId).subscribe(expert => {
      this.currentExpert = expert;
      this.checkExpertTags();
    });
  }

  addNewTag() {
    this.tagService.getTags().subscribe((tagsUpdate) => {this.tags.push(tagsUpdate[tagsUpdate.length - 1])})
  }




}
