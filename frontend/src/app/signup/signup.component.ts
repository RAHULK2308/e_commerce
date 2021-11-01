import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../auth.service';
import {Router} from '@angular/router'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  user:any={
    username:'',
    password:'',
    first_name:'',
    last_name:'',
    email:'',
    address:'',
    phone:'',
    gender:'',
   
  }

  constructor(public auth:AuthService, public router:Router) { }

  ngOnInit(): void {
  }

 adduser(){
  this.auth.newUser(this.user);
  this.router.navigate(['login']);
 
 }

}
