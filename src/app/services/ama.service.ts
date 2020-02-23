import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AmaSession } from '../models/ama-session';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root'
})
export class AmaService {


  constructor(public http: HttpClient) { }

  
  getSession(): Observable<AmaSession> {
    console.log(environment.amaSessionUri)
    return this.http.get<AmaSession>(environment.amaSessionUri);
  }
  

  createSession(createAmaSession: AmaSession): Observable<AmaSession> {
    console.log("The date created is: " + createAmaSession.date)
    console.log("The object createAmaSession is: " + createAmaSession);
    console.log("The URI is: " + environment.amaSessionUri)
    return this.http.post<AmaSession>(
      environment.amaSessionUri,
      createAmaSession,
      httpOptions
  );
  }


}
