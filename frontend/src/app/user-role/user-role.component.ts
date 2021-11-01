import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserRoleService } from '../user-role.service';

@Component({
  selector: 'app-user-role',
  templateUrl: './user-role.component.html',
  styleUrls: ['./user-role.component.css']
})
export class UserRoleComponent implements OnInit {
userRoles:any=[]
  constructor( public userroleservice:UserRoleService, 
    public Router:Router) { }
  ngOnInit(): void {
 this.userroleservice.getuserrole()
 .subscribe(data=>{
   this.userRoles=data;
   console.log(data)
 })
  }

  delete(role:any)
  {
    this.userroleservice.deleteuserrole(role._id)
      .subscribe(data => {
        this.userRoles= this.userRoles.filter((p:any) =>
         p !== role);
      })

}

editrole(role:any){
  localStorage.setItem("userroleId", role._id.toString());
  this.Router.navigate(['userroleUpdate']);
}

}
