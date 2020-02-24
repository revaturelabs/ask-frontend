import { Injectable } from '@angular/core';
import { HttpBackend, HttpClient, HttpHeaders } from '@angular/common/http';
import { AmaSession } from '../models/ama-session';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root'
})
export class AmaService {

  constructor(private httpClient : HttpClient) { }

  getAmaListByExpert(expertId : number) : Observable<AmaSession[]>{
    return this.httpClient.get<AmaSession[]>(`http://localhost:1337/amaSession/${expertId}`);
  }

  getAmaList(){
    return this.httpClient.get<AmaSession[]>(`http://localhost:1337/amaSession`);
  }

  postAmaSession(newSession : AmaSession) : Observable<AmaSession>{
    return this.httpClient.post<AmaSession>(`http://localhost:1337/amaSession`, newSession, httpOptions);
  }
}
