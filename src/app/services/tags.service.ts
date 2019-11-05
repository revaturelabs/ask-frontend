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

  getTags(): Observable<Tag[]> {
    return this.http.get<Tag[]>(environment.tagsUri);
  }

  saveExpertTags(tags: Tag[], expertId: Number){
    const uri = `${environment.userUri}/${expertId}/tags`;
    return this.http.put<Tag>(uri, {"expertTags":tags}, httpOptions);
  }

  getExpertTags(expertId: Number): Observable<any[]>{
    return this.http.get<any[]>(`${environment.userUri}/${expertId}`);
  }
}
