import { Component, OnInit } from '@angular/core';
import { Tag } from '../../models/Tag';
import { TagService } from 'src/app/services/tags.service';

@Component({
  selector: 'app-self-tags',
  templateUrl: './self-tags.component.html',
  styleUrls: ['./self-tags.component.css'],
})
export class SelfTagsComponent implements OnInit {
  tags: Tag[];

  userId = 2;
  // expertStartingTags: Tag[];
  expertStartingTags: any[] = [];
  expertSkills: string[] = [];
  // expertSkills: any[] = [];

  constructor(private tagService: TagService) {}

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

  ngOnInit() {
    this.tagService.getTags().subscribe(tags => {
      this.tags = tags;
      // var a = 'hello from ts';
      // this.skillset = this.tags;
      // document.getElementById('abc').innerHTML=a;
    });
    // 3 is hardcoded, CHANGE IT to the logged in account!
    this.tagService.getExpertTags(3).subscribe(any => {
      console.log(any.expertTags);
      console.log(any.expertTags[0].name);
      console.log(any.expertTags[1].name);
      console.log(Object.keys(any.expertTags));
      console.log(Object.values(any.expertTags));
      // this.expertStartingTags = any.expertTags[0].name;
      for (let i = 0; i < Object.values(any.expertTags).length; i++) {
        console.log("here it is: " + any.expertTags[i].name);
        // this.expertStartingTags = any.expertTags[i].name;
        this.expertStartingTags.push(any.expertTags[i].name);
      }
      console.log(this.expertStartingTags);
      // @ViewChild('Java')
      // toggleChk: MdCheckbox;
      // this.toggleChk.toggle();
    });
    // document.getElementById('test').toggle;
  }
}
