import { Component, OnInit } from '@angular/core';
import {PublicationService} from '../../services/publication.service';
import {List} from "../../interfaces/List";

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.css']
})
export class ListsComponent implements OnInit {

  constructor(private publicationService:PublicationService) { }

  ngOnInit(): void {
    this.getLists();
  }
  getLists(){
    this.publicationService.getLists().subscribe(
      res=>{
        console.log(res)

      },
      err=>{
        console.log(err)
        
      }
    )
  }

}
