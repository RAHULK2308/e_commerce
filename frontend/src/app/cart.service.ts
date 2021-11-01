import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(public http:HttpClient) { }

  newItem(item:any)
  {   
    return this.http.post('http://localhost:3000/cart/add',{"cart":item})
    
  }

  getItems()
  {   
    return this.http.get('http://localhost:3000/cart/getcart')
    
  }

  deletecart(id:any)
{

  return this.http.delete(`http://localhost:3000/cart/remove/`+id)

}
}
