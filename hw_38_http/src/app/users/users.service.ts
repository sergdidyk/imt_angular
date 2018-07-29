import { Injectable } from '@angular/core';
import { Users, USERS, User } from './models/User';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
const apiUrl = 'https://5b2153d4ca762000147b2730.mockapi.io/users'

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  users: Users
  
  constructor(private http: HttpClient) {
    this.users = USERS;
  }

  list(): Observable<Users>{
    return this.http.get<Users>(apiUrl);
  }

  get(id: number): Observable<User>{
    return this.http.get<User>(apiUrl + '/' + id);
  }

  set(user: User): Observable<User>{
    return user.id ? this.update(user) : this.add(user);
  }

  update(user: User): Observable<User>{
    return this.http.put<User>(apiUrl + '/' + user.id, user);
  }

  add(user: User): Observable<User>{
    return this.http.post<User>(apiUrl, user);
  }

  delete(id: number): Observable<User> {
    return this.http.delete<User>(apiUrl + '/' + id);
  }
}
