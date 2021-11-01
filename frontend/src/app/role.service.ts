import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  constructor(public http:HttpClient) { }

  getRoles(){
    return this.http.get('http://localhost:3000/role/getrole')
  }

  addRoles(item:any){
    return this.http.post('http://localhost:3000/role/add',{"role":item})
    .subscribe(data =>{console.log(data)})
  }

  getrole(id:any){

    return this.http.get('http://localhost:3000/role/'+id)
  }

  updaterole(item:any){
    this.http.put('http://localhost:3000/role/update',{"role":item})
    .subscribe(data =>
      {
     console.log(data)
  })
}


deleterole(id:any)
{

  return this.http.delete(`http://localhost:3000/role/remove/`+id)

}
}
