import { Component, OnInit, EventEmitter, Output, Input } from "@angular/core";
import { PostService } from "../services/post.service";
import { Post } from "../models/Post";

@Component({
  selector: "app-post-form",
  templateUrl: "./post-form.component.html",
  styleUrls: ["./post-form.component.css"]
})
export class PostFormComponent implements OnInit {
  @Output() newPost: EventEmitter<Post> = new EventEmitter();
  @Output() updatedPost: EventEmitter<Post> = new EventEmitter();
  @Input() currentPost: Post;
  @Input() isEdit: boolean;

  constructor(private postService: PostService) {}

  ngOnInit() {}

  addPost(head, body) {
    if (!head || !body) {
      alert("Please add post");
    } else {
      this.postService.savePost({ head, body } as Post).subscribe(post => {
        this.newPost.emit(post);
      });
    }
  }

  updatePost() {
    this.postService.updatePost(this.currentPost).subscribe(post => {
      console.log(post);
      this.isEdit = false;
      this.updatedPost.emit(post);
    });
  }
}
