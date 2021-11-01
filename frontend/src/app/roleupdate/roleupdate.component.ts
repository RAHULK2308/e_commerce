import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RoleService } from '../role.service';

@Component({
  selector: 'app-roleupdate',
  templateUrl: './roleupdate.component.html',
  styleUrls: ['./roleupdate.component.css']
})
export class RoleupdateComponent implements OnInit {

  roles:any=[];
  constructor(public roleservice:RoleService,public router:Router) { }

  ngOnInit(): void {
    var id=localStorage.getItem('roleId')
    this.roleservice.getrole(id).subscribe(data=>{
      this.roles=data;
    })
  }

  update(){
    console.log(this.roles)
    this.roleservice.updaterole(this.roles);
    this.router.navigate(['role']);
  }
}
