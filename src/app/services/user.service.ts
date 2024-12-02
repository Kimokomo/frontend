import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';  // Ensure correct path based on your folder structure


@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = 'http://localhost:8080/api/users';


  constructor(private http: HttpClient) { }

  // Method to fetch the users from the backend
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl);  // Return the data as an Observable
  }
}
