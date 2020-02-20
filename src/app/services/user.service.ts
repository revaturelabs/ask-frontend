import { Injectable } from '@angular/core';
import { User } from '../models/User';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { AuthService } from './auth/auth.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient, private authService: AuthService) { }

  getAllUsers(page: number, size: number) : Observable<User[]>{
    return this.http.get<User[]>(environment.userUri);
  }

  getUserById(id:number) : Observable<User>{
    return this.http.get<User>(`${environment.userUri}/${id}`);
  }

  createOrUpdateUser(user: User, id:number) : Observable<User>{
    return this.http.put<User>(`${environment.userUri}/${id}`, user);
  }

  updateUser(user: User, id: number) : Observable<User>{
    return this.http.patch<User>(`${environment.userUri}/${id}`, user);
  }

  updateProfilePic(profilePic: FormData, id: number){
    return this.http.patch<string>(`${environment.userUri}/picture/${id}`, profilePic);
  }

  createUser(user:User){
    return this.http.post<User>(`${environment.userUri}`, user);
  }

  deleteUser(id:number) : void{
    this.http.delete(`${environment.userUri}/${id}`);
  }
}
