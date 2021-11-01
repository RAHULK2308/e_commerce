import { Component, OnInit } from '@angular/core';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { UserService } from '../user.service';
import { UserRoleService } from '../user-role.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-role-add',
  templateUrl: './user-role-add.component.html',
  styleUrls: ['./user-role-add.component.css']
})
export class UserRoleAddComponent implements OnInit {
userRole:any={
  role:'',
  username:''
}

// selectedCar:any='';

 users:any=[];


dropdownList:any = [];
selectedItems:any = [];
dropdownSettings:any = {};

  constructor(public userservice:UserService, public userroleservice:UserRoleService,public Router:Router) { }

  ngOnInit(): void {
this.userservice.getUsers()
.subscribe(data=>{
  this.users=data;
 
})
    this.dropdownList = [
      { item_id: 1, item_text: 'Admin' },
      { item_id: 2, item_text: 'User' },
    ];
    this.selectedItems = [];
    this.dropdownSettings = {
      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true
    };
  }
  onItemSelect(item: any) {
    this.userRole.role=item.item_text
   
  }
  onSelectAll(items: any) {
    items.filter((p:any)=>{
      this.userRole=p.item_text;
    })
  }

  userRoleadd(){
    this.userroleservice.adduserrole(this.userRole)
    this.Router.navigate(['userRole'])
  }

}
  


