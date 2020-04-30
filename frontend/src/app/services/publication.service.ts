import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class PublicationService {
  private URL = 'http://localhost:3500'
  constructor(
    private http: HttpClient, 
    private router: Router
  ) { }
  addList(list){
    return this.http.post<any>(this.URL + '/add-list', list)
  }
}
