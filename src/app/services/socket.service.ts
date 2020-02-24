// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class SocketService {
 
//   constructor() { }
// }


import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';


import { Message } from '../models/message';
import { map } from 'rxjs/operators';
import { catchError } from 'rxjs/operators';
//import { observable } from 'rxjs/internal/symbol/observable';
import { Observable, throwError } from 'rxjs';



@Injectable({ providedIn: 'root'})
export class SocketService {
  url: string = environment.url + "api/socket";

  constructor(private http: HttpClient) { }

  post(data: Message) {
    return this.http.post<Message>(this.url, data)
      .pipe(map((data: Message) => { return data; }))
      .pipe(catchError(error => {
       // return new ErrorObservable(error);
       return  throwError(error);
      }))
      ;
  }
}
