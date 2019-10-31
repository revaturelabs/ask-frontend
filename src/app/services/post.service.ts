import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from '../models/Post';
import { environment } from 'src/environments/environment';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})

export class PostService {
  constructor(private http: HttpClient) {}

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(environment.questionsUri);
  }

  savePost(post: Post): Observable<Post> {
    return this.http.post<Post>(environment.questionsUri, post, httpOptions);
  }

  updatePost(post: Post): Observable<Post> {
    const url = `${environment.questionsUri}/${post.id}`;

    return this.http.put<Post>(url, post, httpOptions);
  }

  removePost(post: Post | number): Observable<Post> {
    const id = typeof post === 'number' ? post : post.id;
    const url = `${environment.questionsUri}/${id}`;

    return this.http.delete<Post>(url, httpOptions);
  }
}
