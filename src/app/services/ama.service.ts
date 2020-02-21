import { Injectable } from '@angular/core';
import { HttpBackend, HttpClient } from '@angular/common/http';
import { AmaSession } from '../models/ama-session';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AmaService {

  constructor(private httpClient : HttpClient) { }

  getAmaListByExpert(expertName : string) : Observable<AmaSession[]>{
    return this.httpClient.get<AmaSession[]>(`http://localhost:1337/amaSession/${expertName}`);
  }

  getAmaList(){
    return this.httpClient.get<AmaSession[]>(`http://localhost:1337/amaSession`);
  }
}
