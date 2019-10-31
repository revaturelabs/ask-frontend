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
  tagConfig: string[] = [];

  skillset: Object = {
    userId : 1,
    tagConfig: [],
  };

  constructor(private tagService: TagService) {}

  toggle($event, id) {
    if ($event.checked === true) {
      console.log(id + ' is checked!');
      this.tagConfig.push('hello');
    } else {
      console.log(id + ' is unchecked!');
      this.tagConfig.push('goodbye');
    }
    console.log(this.tagConfig);
    document.getElementById('abc').innerHTML = JSON.stringify(this.tagConfig);
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
