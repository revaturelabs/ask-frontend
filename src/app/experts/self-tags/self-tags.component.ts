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
  expertSkills: string[] = [];
  // expertSkills: any[] = [];

  constructor(private tagService: TagService) {}

  toggle($event, id) {
    if ($event.checked === true) {
      console.log(id + ' is checked!');
      this.expertSkills.push(id);
    } else {
      console.log(id + ' is unchecked!');
      //delete the value and close the empty array slot
      this.expertSkills.splice([this.expertSkills.indexOf(id)], 1);
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
  }
}
