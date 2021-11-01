import { Component, OnInit } from '@angular/core';
import { StockService } from '../stock.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.css']
})
export class PurchaseComponent implements OnInit {

  Stock:any=[];
  query:any='';
 
  constructor(public stockservice:StockService, public router:Router) { }

  ngOnInit(): void {
    this.stockservice.getstockes().subscribe(data=>{
      this.Stock=data;
      console.log(this.Stock)
    })
  }

  view(stock:any){
    localStorage.setItem("productId", stock._id.toString());
    this.router.navigate(['single']);
  }
}
