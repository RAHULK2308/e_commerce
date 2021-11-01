import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import {Router} from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user:any={
    username:"",
    password:""
  }
  constructor(public auth:AuthService, public router:Router) { }
  ngOnInit(): void {
  }
  loginUser () {
    if (this.user.username=="admin@gmail.com" && this.user.password=="12345678"){
    this.auth.loginUser(this.user)
    .subscribe(
      res => {
        localStorage.setItem('token', res.token)
        this.router.navigate(['/'])
        // alert("Now Your The Admin");
      },
      err => {
        alert(err.error);
        this.router.navigate(['/'])
      }) 
  }else{
    this.auth.loginUser(this.user)
    .subscribe(
      res => {
        localStorage.setItem('token1', res.token)
        this.router.navigate(['/']);
      },
      err => {
        console.log(err);
        alert(err.error);
        this.router.navigate(['/'])
      })}}}



