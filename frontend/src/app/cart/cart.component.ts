import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { OrderService } from '../order.service';
import {Router} from '@angular/router'
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
carts:any=[]

  constructor(public cartservice:CartService,public orderservice:OrderService, public router:Router,private toastr: ToastrService) { }

  ngOnInit(): void {
    this.cartservice.getItems()
    .subscribe(data=>{
      this.carts=data;
    })
  }

  delete(cart:any)
  {
    this.cartservice.deletecart(cart._id)
      .subscribe(data => {
        this.carts= this.carts.filter((p:any) => p !== cart);
      })
}

purchase(cart:any){
this.orderservice.addItem(cart).
subscribe(
  res => {
    this.toastr.success('Order Placed Successfully', 'Notification', {
      positionClass: 'toast-bottom-right' });
      this.cartservice.deletecart(cart._id)
      .subscribe(data => {
        this.carts= this.carts.filter((p:any) => p !== cart);
      })
    
  })
}

purchaseAll(){
  this.carts.filter((p:any)=>
  this.orderservice.addItem(p)
  .subscribe()
)
this.carts.filter((p:any)=>
this.cartservice.deletecart(p._id)
      .subscribe(data => {
        this.carts= this.carts.filter((d:any) => d !== p);
      })
)
this.toastr.success('Order Placed Successfully', 'Notification', {
  positionClass: 'toast-bottom-right' });
}

}
