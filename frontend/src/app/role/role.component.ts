import { Component, OnInit } from '@angular/core';
import { RoleService } from '../role.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.css']
})
export class RoleComponent implements OnInit {

  Roles:any=[]

  constructor(public roleservice:RoleService,public router:Router) { }

  ngOnInit(): void {
    this.roleservice.getRoles()
    .subscribe(data=>{
      this.Roles=data
    })
  }

  editrole(role:any){
    localStorage.setItem("roleId", role._id.toString());
    this.router.navigate(['roleupdate']);
  }

  delete(role:any)
  {
    this.roleservice.deleterole(role._id)
      .subscribe(data => {
        this.Roles= this.Roles.filter((p:any) => p !== role);
      })
}

}
