import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  userDetails:any=[]

  constructor(public User:UserService, public router:Router) { }

  ngOnInit(): void {
    this.User.getUsers().subscribe(data=>{
      this.userDetails=data;
    })

  }

  
  edit(user:any){
    localStorage.setItem("userId", user._id.toString());
    this.router.navigate(['userupdate']);
  }

  Delete(user:any)
  {
    this.User.deleteuser(user._id)
      .subscribe(data => {
        this.userDetails= this.userDetails.filter((p:any) => p !== user);
      })
}
}
