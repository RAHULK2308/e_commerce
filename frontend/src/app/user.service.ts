import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(public http:HttpClient) { }

  getUsers(){
    return this.http.get('http://localhost:3000/user/getuser')
  }

  getUser(id:any){

    return this.http.get('http://localhost:3000/user/user/'+id)
  }

  updateuser(item:any){
    this.http.put('http://localhost:3000/user/update',{"user":item})
    .subscribe(data =>
      {
     console.log(data)
  })
  
}
  deleteuser(id:any)
  {

    return this.http.delete(`http://localhost:3000/user/remove/`+id)

  }
}
