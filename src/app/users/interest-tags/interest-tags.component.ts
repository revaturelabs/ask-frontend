import { Component, OnInit, Injectable } from '@angular/core';
import { Tag } from '../../models/Tag';
import { TagService } from 'src/app/services/tags.service';
import { AuthService } from 'src/app/services/auth/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
@Component({
  selector: 'app-interest-tags',
  templateUrl: './interest-tags.component.html',
  styleUrls: ['./interest-tags.component.css']
})

export class InterestTagsComponent implements OnInit {
  tags: Tag[];
  isChecked = false;

  interestId = this.authService.account.id;
  interestSkills: string[] = [];
  currentExpert: any;

  constructor(
    private tagService: TagService,
    private authService: AuthService,
    private snackBar: MatSnackBar,
  ) { }

  // Check and uncheck tags use toggle to add and remove tags from list of expert associated tags to be updated
  toggle($event, id) {
    if ($event.checked === true) {
      this.interestSkills.push(id);
    } else {
      // delete the value and close the empty array slot
      this.interestSkills.splice(this.interestSkills.indexOf(id), 1);
    }
  }

  onSubmit() {
    this.tagService
      .saveInterestTags(
        this.interestSkills.map<Tag>(t => {
          return { name: t, id: 0 };
        }),
        this.authService.account.id,
      )
      .subscribe();
    this.snackBar.open(`Tags Updated`, `OK`, { duration: 2000 });
  }

  // For initialization, currentExpert associated tags are prechecked in list of tags
  checkExpertTags() {
    for (const t of this.tags) {
      this.currentExpert.interestTags.forEach(element => {
        if (element.name === t.name) {
          this.toggle({ checked: true }, t.name);
          t.checked = true;
        } else {
          return false;
        }
      })
    }
  }

  ngOnInit() {
    this.tagService.getTags().subscribe(tags => {
      this.tagService.getInterestTags(this.interestId).subscribe(expert => {
        this.tags = tags;
        this.currentExpert = expert;
        this.checkExpertTags();
      },
        error => {
          // still populate tags even if getting the expert tags fails
          this.tags = tags;
          console.error(error);
        });
    });
  }

  addNewTag() {
    this.tagService.getTags().subscribe((tagsUpdate) => { this.tags.push(tagsUpdate[tagsUpdate.length - 1]); });
  }
}
