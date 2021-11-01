import { Component, OnInit } from '@angular/core';
import { UserRoleService } from '../user-role.service';
import { Router } from '@angular/router';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-role-update',
  templateUrl: './user-role-update.component.html',
  styleUrls: ['./user-role-update.component.css']
})
export class UserRoleUpdateComponent implements OnInit {

  users:any=[];
  userRole:any=[]

  dropdownList:any = [];
  selectedItems:any = [];
  dropdownSettings:any = {};
  constructor(public userservice:UserService, public userroleservice:UserRoleService,public Router:Router) { }

  ngOnInit(): void {
    var roleId=localStorage.getItem('userroleId')
    this.userroleservice.getrole(roleId)
    .subscribe(data=>{
      this.userRole=data;
     
    })
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

  update(){
    this.userroleservice.update(this.userRole)
    this.Router.navigate(['userRole'])
  }

  }

