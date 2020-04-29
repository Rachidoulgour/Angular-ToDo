import { Component, OnInit } from '@angular/core';
import { UserService} from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  user={}
  constructor(
    private userService: UserService, 
    private router: Router
  ) { }

  ngOnInit(): void {
  }
  signUp(){
    console.log(this.user)
    this.userService.signUp(this.user).subscribe(
      res => {
        console.log(res)
        //localStorage.setItem('token', res['token']);
        //localStorage.setItem('user', JSON.stringify(res.user))
        //this.router.navigate(['/perfil'])
      },
      err =>{
        console.log(err)
      }
    )
  }

}
