import { Component, OnInit, Output } from '@angular/core';
import { Tag } from 'src/app/models/Tag';
import { TagService } from 'src/app/services/tags.service';

@Component({
  selector: 'app-specific-tag-info',
  templateUrl: './specific-tag-info.component.html',
  styleUrls: ['./specific-tag-info.component.css']
})
export class SpecificTagInfoComponent implements OnInit {

  tag: Tag[];
  

  constructor(
    private tagService : TagService
  ) { }

  ngOnInit() {
    const selectedTagId = this.tagService.getTagId();
    this.tagService.getTagsById(selectedTagId).subscribe(tag => {
      this.tag = tag;
    });
  }



}
