import { Component, OnInit } from '@angular/core';
import { OrderService } from '../order.service';


@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
orders:any=[]
  constructor(public orderservice:OrderService) { }

  ngOnInit(): void {
    this.orderservice.getItem()
    .subscribe(data=>{
      this.orders=data
    })
  }

  delivered(item:any){
    this.orderservice.delivereditem(item._id)
    .subscribe(
      res=>{
        item.status="delivered";
      }
    )
  }

  cancel(item:any){
    this.orderservice.cancelitem(item._id)
    .subscribe(
      res=>{
        item.status="cancelled";
      }
    )
  }
}
