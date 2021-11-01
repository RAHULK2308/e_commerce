import { Component, OnInit } from '@angular/core';
import { StockService } from '../stock.service';
import { Router } from '@angular/router';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-singleproduct',
  templateUrl: './singleproduct.component.html',
  styleUrls: ['./singleproduct.component.css']
})
export class SingleproductComponent implements OnInit {
  stock:any=[];
  cart:any={
  stockId:'',
  total_qty:'',
  total_price:'',
  image:'',
  product_name:''
  }

  ngOnInit(): void {
    let productId=localStorage.getItem("productId")
    this.stockservice.getstock(productId)
    .subscribe(data=>{
      this.stock=data
      this.cart.total_qty=1;
      this.cart.total_price=this.stock.price_unit;
      this.cart.stockId=productId;
      this.cart.image=this.stock.image;
      this.cart.product_name=this.stock.product_name
    })}
  increase(){
    if(this.cart.total_qty<this.stock.quantity){
    this.cart.total_qty=this.cart.total_qty+1;
    this.cart.total_price=this.cart.total_price * this.cart.total_qty;
    }}
    decrease(){
      if(this.cart.total_qty>1){
        var qty=this.cart.total_qty
        this.cart.total_qty=this.cart.total_qty-1;
        this.cart.total_price=(this.cart.total_price/qty)
      }}
  
back(){
  localStorage.removeItem("productId");
  this.router.navigate(['purchase'])
}

additem(){
this.cartservice.newItem(this.cart)
.subscribe(
  res => {
    alert('success');
    localStorage.removeItem("productId");
    this.router.navigate(['purchase'])

  },
  err => {
    console.log(err);
    alert(err.error);
    this.router.navigate(['single']);
})

}

constructor(public stockservice:StockService,public router:Router, public cartservice:CartService) { }
}
