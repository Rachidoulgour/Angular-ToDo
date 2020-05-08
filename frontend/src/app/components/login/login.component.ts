import { Component, OnInit } from '@angular/core';
import { UserService} from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user={
    email: "",
    password: ""
  }
  constructor(
    private userService: UserService, 
    private router: Router) { }

  ngOnInit(): void {
  }
  login(){
    console.log(this.user)
    this.userService.login(this.user).subscribe(
      res=>{
        console.log(res)
        console.log(res.user);
        localStorage.setItem('user', JSON.stringify(res.user));
        localStorage.setItem('token', res.token);
        console.log(res.token)
        this.router.navigate(['/listas']);
        
        
      },
      err=>{
        console.log(err)
      }
    )
  }

}
