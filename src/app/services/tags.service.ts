import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tags } from '../models/Tags';
import {environment} from '../../environments/environment';



    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    }

    @Injectable({
      providedIn: 'root'
    })
    export class TagService {
      //tagsUrl: string = 'http://ec2-54-80-244-190.compute-1.amazonaws.com:1337/tags';
      constructor(private http: HttpClient) { }
     
      getTags() : Observable<Tags[]> {
        return this.http.get<Tags[]>(environment.tagsUrl);
      }

    }
