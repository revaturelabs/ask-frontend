import { Component, OnInit, Injectable } from '@angular/core';
import { Tag } from '../../models/Tag';
import { TagService } from 'src/app/services/tags.service';
import { AuthService } from 'src/app/services/auth/auth.service';

@Injectable({
  providedIn: 'root'
})

//God help you
@Component({
  selector: 'app-self-tags',
  templateUrl: './self-tags.component.html',
  styleUrls: ['./self-tags.component.css'],
})
export class SelfTagsComponent implements OnInit {
  tags: Tag[];
  isChecked: boolean = false;

  userId = this.authService.account.id;
  // expertStartingTags: Tag[];
  expertStartingTags: string[];
  expertSkills: string[] = [];
  currentExpert: any;

  constructor(private tagService: TagService, private authService: AuthService) { }

  // eval = this.evaluation();
  // evaluation() {
  //   if (this.expertStartingTags.includes('Java')) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // }

  toggle($event, id) {
    if ($event.checked === true) {
      console.log(id + ' is checked!');
      this.expertSkills.push(id);
    } else {
      console.log(id + ' is unchecked!');
      //delete the value and close the empty array slot
      this.expertSkills.splice(this.expertSkills.indexOf(id), 1);
    }
    console.log(this.expertSkills);
  }

  onSubmit() {
    console.log("blah");
    this.tagService.saveExpertTags(this.expertSkills.map<Tag>(t=>{return {"name":t, "id":0}}), this.authService.account.id).subscribe(
      console.log, console.error
    );
  }

  checkExpertTags() {
    for (let i = 0; i < this.tags.length; i++) {
      this.currentExpert.expertTags.forEach(element => {
        if (element.name==this.tags[i].name) {
          this.toggle({checked:true}, this.tags[i].name);
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
      console.log(tags);
    });

    this.tagService.getExpertTags(this.userId).subscribe((expert) => {
      this.currentExpert = expert;
      //console.log(this.currentExpert.expertTags[0].name);
      console.log(this.authService.account);
      // console.log(expert.expertTags);
      // var a = 'hello from ts';
      // this.skillset = this.tags;
      // document.getElementById('abc').innerHTML=a;
      this.checkExpertTags();
    });
    
  }



}
