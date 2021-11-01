import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public http:HttpClient) { }

  newUser(item:any)
  {   
    return this.http.post('http://localhost:3000/user/register',{"user":item})
    .subscribe(data =>{console.log(data)})
  }

  loginUser(user:any)
  {
    return this.http.post<any>('http://localhost:3000/user/login', user)
  }

  AdminloggedIn()
  {
    return !!localStorage.getItem('token')
  }
  UserLoggedIn()
  {
    return !!localStorage.getItem('token1')
  }
  getToken()
  {
    return localStorage.getItem('token')
  }
  
}
