import { Component, OnInit } from '@angular/core';
import {PublicationService} from '../../services/publication.service';
import {List} from "../../interfaces/List";

@Component({
  selector: 'app-publications',
  templateUrl: './publications.component.html',
  styleUrls: ['./publications.component.css']
})
export class PublicationsComponent implements OnInit {
  list:List={
    _id:"",
    title:""
  }
  constructor(private publicationService:PublicationService) { }

  ngOnInit(): void {
  }
  addList(){
    this.publicationService.addList(this.list).subscribe(
      res=>{
        console.log(res)

      },
      err=>{
        console.log(err)
        
      }
    )
  }
}
