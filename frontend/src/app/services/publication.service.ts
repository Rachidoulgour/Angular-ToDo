import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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
  addList(list){
    return this.http.post<any>(this.URL + '/add-list', list)
  }
  getLists(){
    return this.http.get<any>(this.URL + '/get-lists')
  }
  addTask(task){
    //let params = JSON.stringify(task);
    return this.http.post<any>(this.URL + '/add-task', task)
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
  deleteTask(id){
    return this.http.delete<any>(this.URL + '/delete-task/'+id)
  }
}
