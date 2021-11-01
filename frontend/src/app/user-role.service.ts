import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserRoleService {

  constructor(public http:HttpClient) { }

  getuserrole(){
    return this.http.get('http://localhost:3000/userrole/getuserrole')
  }

  adduserrole(item:any){
    return this.http.post('http://localhost:3000/userrole/add',{"urole":item})
    .subscribe(data =>{console.log(data)})
  }

  getrole(id:any){
    return this.http.get('http://localhost:3000/userrole/'+id)
  }

  update(item:any){
    this.http.put('http://localhost:3000/userrole/update',{"urole":item})
    .subscribe(data =>
      {
     console.log(data)
  })
}
deleteuserrole(id:any)
{
  return this.http.delete(`http://localhost:3000/userrole/remove/`+id)
}
}
