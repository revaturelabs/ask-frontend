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

  constructor(private http: HttpClient) { }

  getAmaListByExpert(expertId : number) : Observable<AmaSession[]>{
    return this.http.get<AmaSession[]>(`${environment.amaSessionUri}/${expertId}`);
  }

  getAmaList(){
    return this.http.get<AmaSession[]>(`${environment.amaSessionUri}`);
  }

  createAmaSession(createAmaSession: AmaSession): Observable<AmaSession> {
    return this.http.post<AmaSession>(
      environment.amaSessionUri,
      createAmaSession,
      httpOptions
    );
  }

}
