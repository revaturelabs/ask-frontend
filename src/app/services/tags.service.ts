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

  saveExpertTags(tag: Tag){
    const uri = environment.tagsUri;
    return this.http.post<Tag>(uri, tag, httpOptions);
  }

  getExpertTags(expertId: number): Observable<any[]>{
    return this.http.get<any[]>(`${environment.userUri}/${expertId}`);
  }
}
