import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(public http:HttpClient) { }

  addItem(item:any)
  {   
    return this.http.post('http://localhost:3000/order/add',{"order":item})
    
  }

  getItem(){
    return this.http.get('http://localhost:3000/order/getorder')  
  }

  delivereditem(id:any){
    
   return this.http.put('http://localhost:3000/order/update/delivered',{"_id":id})
   
}


cancelitem(id:any){
    
  return this.http.put('http://localhost:3000/order/update/cancel',{"_id":id})
  
}
}
