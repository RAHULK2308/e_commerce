import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-userupdate',
  templateUrl: './userupdate.component.html',
  styleUrls: ['./userupdate.component.css']
})
export class UserupdateComponent implements OnInit {

  
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

  constructor(public userService:UserService,public router:Router) { }

  ngOnInit(): void {
    let userId=localStorage.getItem("userId")
    this.userService.getUser(userId)
    .subscribe(data=>{
      console.log(data);
      this.user=data
    })
  }

  update(){
    this.userService.updateuser(this.user);
    this.router.navigate(['/user'])
  }

}
