import { Component, OnInit, Output } from '@angular/core';
import { Tag } from 'src/app/models/Tag';
import { TagService } from 'src/app/services/tags.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-specific-tag-info',
  templateUrl: './specific-tag-info.component.html',
  styleUrls: ['./specific-tag-info.component.css']
})
export class SpecificTagInfoComponent implements OnInit {

  tag: Tag;
  

  constructor(
    private tagService : TagService,
    private route : ActivatedRoute
  ) { }

  ngOnInit() {    
    let id =+ this.route.snapshot.paramMap.get('id');
    this.tagService.getTagById(id).subscribe((data)=>{
      this.tag = data;
    });
    }

}
