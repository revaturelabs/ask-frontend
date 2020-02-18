import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Tag } from 'src/app/models/Tag';
import { TagService } from 'src/app/services/tags.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-topic-page',
  templateUrl: './topic-page.component.html',
  styleUrls: ['./topic-page.component.css']
})
export class TopicPageComponent implements OnInit {

  tag: Tag[];
  

  constructor(
    public router: Router,
    private tagService : TagService,
    private cdRef: ChangeDetectorRef
    ) { }

  ngOnInit() {
    this.tagService.getTags().subscribe(tag => {
      this.tag = tag;
    });
  }

  viewTopic = selectTagId => {
    this.router.navigate([`/view-topic/${selectTagId}`]);
  }

}