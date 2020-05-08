import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Router } from '@angular/router';
import { User } from '../interfaces/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private URL = 'http://localhost:3500'
  identity: string;

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

  getIdentity(){
    let identity = JSON.parse(localStorage.getItem('user'));
    if(identity != "undefined"){
      this.identity = identity
    }else{
      this.identity = null;
    }
    return this.identity;
  }
  
  getToken(){
    return localStorage.getItem('token');
  }
  loggedIn(){
    return !!localStorage.getItem('token');
  }
  logOut(){
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    localStorage.removeItem('listId');
    this.router.navigate(['/entrar'])
  }
}
