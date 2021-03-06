import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tag } from '../models/Tag';
import { environment } from '../../environments/environment';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class TagService {
  constructor(private http: HttpClient) {}

  tagId:number;

  getTags(): Observable<Tag[]> {
    return this.http.get<Tag[]>(environment.tagsUri);
  }

  getTagById(tagId): Observable<Tag>{
    return this.http.get<Tag>(`${environment.tagsUri}/${tagId}`);
  }

  saveExpertTags(tags: Tag[], expertId: Number){
    const uri = `${environment.userUri}/${expertId}/tags`;
    return this.http.put<Tag>(uri, {"expertTags":tags}, httpOptions);
  }

  getExpertTags(expertId: Number): Observable<Tag[]>{
    return this.http.get<Tag[]>(`${environment.userUri}/${expertId}`);
  }
}

