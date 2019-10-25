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

  ngOnInit() {
    this.tagService.getTags().subscribe(tags => {
      this.tags = tags;
    });
  }
}
