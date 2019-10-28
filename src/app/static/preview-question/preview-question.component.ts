import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { PostService } from '../../services/post.service';
import { Post } from '../../models/Post';

@Component({
  selector: 'app-preview-question',
  templateUrl: './preview-question.component.html',
  styleUrls: ['./preview-question.component.css'],
})
export class PreviewQuestionComponent implements OnInit {

  @Input() post: Post;

  viewQuestion = () => {
    this.router.navigate(['/view-question']);
  }

  constructor(public router: Router, private postService: PostService) {}

  ngOnInit() {}
}
