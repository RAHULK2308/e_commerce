import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StockService {

  constructor(public http:HttpClient) { }

  getstockes(){
    return this.http.get('http://localhost:3000/stock/getstock')
  }

  addstock(item:any){
    return this.http.post('http://localhost:3000/stock/add',{"stock":item})
    .subscribe(data =>{console.log(data)})
  }

  getstock(id:any){
    return this.http.get('http://localhost:3000/stock/'+id)
  }

  updatestock(item:any){
    this.http.put('http://localhost:3000/stock/update',{"stock":item})
    .subscribe(data =>
      {
     console.log(data)
  })
}
deletestock(id:any)
{
  return this.http.delete(`http://localhost:3000/stock/remove/`+id)
}
}
