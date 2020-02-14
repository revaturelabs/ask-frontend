import { Injectable } from '@angular/core';
import { User } from '../models/User';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  constructor(private http: HttpClient) { }

  getAllUsers(page: number, size: number) {
    this.http.get<User[]>(environment.userUri);
    //.subscribe((users: User[]) => {
    //  if (users.length > 0){
    //    return users;
    //  }
    //});
  }

  getUserById(id: number) {
    return this.http.get<User>(`${environment.userUri}/${id}`);
    //.subscribe((user: User) => {
    //  if (user != null) {
    //    return user;
    //  }
    //});
  }

  createOrUpdateUser(user: User, id:number){
    return this.http.put<User>(`${environment.userUri}/${id}`, user);
  }

  updateUser(user: User, id: number){
    return this.http.patch<User>(`${environment.userUri}/${id}`, user);
  }

  updateProfilePic(profilePic: FormData, id: number){
    this.http.patch(`${environment.userProfile}/${id}`, profilePic)
    .subscribe((imageLink: string)=> {
      return imageLink;
    })
  }

  createUser(user:User){
    return this.http.post<User>(`${environment.userUri}`, user);
  }

  deleteUser(id:number) : void{
    this.http.delete(`${environment.userUri}/${id}`);
  }

  getUserQuestions(id: number){
    
  }

  updateUserTags(user: User, id: number){

  }
  
}
