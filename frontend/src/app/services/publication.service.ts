import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class PublicationService {
  private URL = 'http://localhost:3500'
  listId;
  constructor(
    private http: HttpClient, 
    private router: Router
  ) { }
  getToken(){
    return localStorage.getItem('token');
  }
  addList(list){
    let headers = new HttpHeaders().set('Content-Type', 'application/json').set('Authorization', this.getToken())
    return this.http.post<any>(this.URL + '/add-list', list, {headers: headers})
  }
  getLists(user_id){
    let headers = new HttpHeaders().set('Content-Type', 'application/json').set('Authorization', this.getToken())
    return this.http.get<any>(this.URL + '/get-lists/'+user_id, {headers: headers})
  }
  addTask(task){
    //let params = JSON.stringify(task);
    let headers = new HttpHeaders().set('Content-Type', 'application/json').set('Authorization', this.getToken())
    return this.http.post<any>(this.URL + '/add-task', task, {headers: headers})
  }
  getListId(){
    let listId = JSON.parse(localStorage.getItem('listId'));
    if(listId != "undefined"){
      this.listId = listId
    }else{
      this.listId = null;
    }
    return this.listId;
  }
  deleteList(id){
    let headers = new HttpHeaders().set('Content-Type', 'application/json').set('Authorization', this.getToken())
    return this.http.delete<any>(this.URL + '/delete-list/'+id, {headers: headers})
  }

  deleteTask(id){
    let headers = new HttpHeaders().set('Content-Type', 'application/json').set('Authorization', this.getToken())
    return this.http.delete<any>(this.URL + '/delete-task/'+id, {headers: headers})
  }
}
