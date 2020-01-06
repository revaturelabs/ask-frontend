import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Response } from '../models/Response';
import { environment } from 'src/environments/environment';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class ResponseService {
  constructor(private http: HttpClient) {}

  getResponses(): Observable<Response[]> {
    return this.http.get<Response[]>(environment.responsesUri);
  }

  getResponseById(responseId): Observable<Response> {
    return this.http.get<Response>(`${environment.responsesUri}/${responseId}`);
  }

  saveResponse(response: Response): Observable<Response> {
    return this.http.post<Response>(
      environment.responsesUri,
      response
    );
  }
  updateResponse(response: Response): Observable<Response> {
    const url = `${environment.responsesUri}/${response.id}`;
    return this.http.put<Response>(url, response, httpOptions);
  }
  removeResponse(response: Response | number): Observable<Response> {
    const id = typeof response === 'number' ? response : response.id;
    const url = `${environment.responsesUri}/${id}`;
    return this.http.delete<Response>(url, httpOptions);
  }
}
