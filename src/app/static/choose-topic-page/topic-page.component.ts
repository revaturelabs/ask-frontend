import { Component, OnInit } from '@angular/core';
import { Tag } from 'src/app/models/Tag';
import { TagService } from 'src/app/services/tags.service';

@Component({
  selector: 'app-topic-page',
  templateUrl: './topic-page.component.html',
  styleUrls: ['./topic-page.component.css']
})
export class TopicPageComponent implements OnInit {

  tag: Tag[];

  constructor(
    private tagService : TagService
    ) { }

  ngOnInit() {
    this.tagService.getTags().subscribe(tag => {
      this.tag = tag;
    });
  }

}
