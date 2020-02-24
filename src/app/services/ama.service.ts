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

  createAmaSession(createAmaSession: AmaSession): Observable<AmaSession> {
    return this.http.post<AmaSession>(
      environment.amaSessionUri,
      createAmaSession,
      httpOptions
  );
  }


}
