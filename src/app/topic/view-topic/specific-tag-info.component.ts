
import { Component, OnInit, Output, Input } from '@angular/core';
import { Tag } from 'src/app/models/Tag';
import { TagService } from 'src/app/services/tags.service';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';


@Component({
  selector: 'app-specific-tag-info',
  templateUrl: './specific-tag-info.component.html',
  styleUrls: ['./specific-tag-info.component.css']
})
export class SpecificTagInfoComponent implements OnInit {

  tag: Tag = { name: '', id: 0 };

  constructor(
    private tagService: TagService,
    private route: ActivatedRoute,
    public authService: AuthService,
  ) { }

  ngOnInit() {
    let id =+ this.route.snapshot.paramMap.get('id');
    this.tagService.getTagById(id).subscribe((data) => {
      this.tag = data;
    });
  }

}
