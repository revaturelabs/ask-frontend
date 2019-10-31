import { Component, OnInit } from '@angular/core';
import { Tags } from '../../models/Tags';
import { TagService } from 'src/app/services/tags.service';

@Component({
  selector: 'app-self-tags',
  templateUrl: './self-tags.component.html',
  styleUrls: ['./self-tags.component.css'],
})
export class SelfTagsComponent implements OnInit {
  tags: Tags[];

  constructor(private tagService: TagService) {}

  toggle($event, id){
    // let checkbox = document.getElementById(id);
    if($event.checked===true){
      console.log(id + ' is checked!');
    } else {
      console.log(id + ' is unchecked!');
    }
  }

  ngOnInit() {
    this.tagService.getTags().subscribe(tags => {
      this.tags = tags;
      var a = 'hello from ts';
    });
  }
}
