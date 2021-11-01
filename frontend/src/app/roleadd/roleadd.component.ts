import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RoleService } from '../role.service';

@Component({
  selector: 'app-roleadd',
  templateUrl: './roleadd.component.html',
  styleUrls: ['./roleadd.component.css']
})
export class RoleaddComponent implements OnInit {

  roles:any={
    name:'',
    desc:'',
  }
  
  constructor(public roleservice:RoleService,public router:Router) { }

  roleAdd(){
    console.log(this.roles)
    this.roleservice.addRoles(this.roles);
    this.router.navigate(['role']);
  }
  ngOnInit(): void {
  }

}
