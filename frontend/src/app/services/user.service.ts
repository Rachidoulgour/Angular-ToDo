import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Router } from '@angular/router';
import { User } from '../interfaces/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private URL = 'http://localhost:3500'

  constructor(
    private http: HttpClient, 
    private router: Router
  ) { }
  signUp(user){
    return this.http.post<any>(this.URL + '/signup', user)
  }
  login(user){
    return this.http.post<any>(this.URL + '/login', user)
  }
}
