import { Component, OnInit } from '@angular/core';
import {PublicationService} from '../../services/publication.service';
import {List} from "../../interfaces/List";
import { Router } from '@angular/router';

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
  constructor(private publicationService:PublicationService,
    private router:Router) { }

  ngOnInit(): void {
  
  }
  addList(){
    this.publicationService.addList(this.list).subscribe(
      res=>{
        console.log(res)
        this.router.navigate(['/listas']);
      },
      err=>{
        console.log(err)
        
      }
    )
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
