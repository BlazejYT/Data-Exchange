import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { User } from '../models/user.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  addUser(user: User): Observable<string>{
    return this.http.post<string>(`${this.apiUrl}/add`, user)
  }

  getUser(id: number): Observable<User>{
    return this.http.get<User>(`${this.apiUrl}/get/${id}`)
  }
}
