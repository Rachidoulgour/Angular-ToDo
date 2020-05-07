import { Component, OnInit } from '@angular/core';
import {PublicationService} from '../../services/publication.service';
import {List} from "../../interfaces/List";
import { Router } from '@angular/router';
import { Task } from 'src/app/interfaces/Task';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.css']
})
export class ListsComponent implements OnInit {
  lists:List[];
  tasks:Task[];
  //list:List;
  id;
  
  constructor(private publicationService:PublicationService, private router: Router) { 
    
  }

  ngOnInit(): void {
    this.getLists();
  }
  refresh($event=null){
    console.log(event);
    this.getLists();
  }
  getLists(){
    this.publicationService.getLists().subscribe(
      res=>{
        console.log(res)
        this.lists = res.lists;
        this.tasks= res.tasks

      },
      err=>{
        console.log(err)
        
      }
    )
  }
  deleteList(id){
    console.log(id)
    this.publicationService.deleteList(id).subscribe(
      res=>{
        console.log(res)
        this.refresh();
      },
      err=>{
        console.log(err)
      }
    )
  }


  newTask(){
    
    console.log(event.target.value)
    this.id=event.target.value;
    localStorage.setItem('listId', this.id)
    this.router.navigate(['/añadir-tarea']);
  }
  deleteTask(id){
    console.log("esto es",id)
    this.publicationService.deleteTask(id).subscribe(
      res=>{
        console.log(res)
        this.refresh();
      },
      err=>{
        console.log(err)
      }
    );
  }
}
