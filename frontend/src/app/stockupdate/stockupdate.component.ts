import { Component, OnInit } from '@angular/core';
import { StockService } from '../stock.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-stockupdate',
  templateUrl: './stockupdate.component.html',
  styleUrls: ['./stockupdate.component.css']
})
export class StockupdateComponent implements OnInit {
  stock:any=[];

  constructor(public stockservice:StockService,public router:Router) { }

  ngOnInit(): void {
    let stockId=localStorage.getItem("stockId")
    this.stockservice.getstock(stockId)
    .subscribe(data=>{
     
      this.stock=data
    })
  }

  updatestock(){
    this.stockservice.updatestock(this.stock);
    this.router.navigate(['product'])
  }

}
