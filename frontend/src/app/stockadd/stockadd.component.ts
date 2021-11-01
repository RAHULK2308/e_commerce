import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { StockService } from '../stock.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-stockadd',
  templateUrl: './stockadd.component.html',
  styleUrls: ['./stockadd.component.css']
})
export class StockaddComponent implements OnInit {

  stock:any={
    product_name:'',
    product_desc:'',
    price_unit:'',
    quantity:'',
    image:''
  }
  constructor(public stockservice:StockService, public router:Router) { }

  ngOnInit(): void {
  }
  addstock(){
    this.stockservice.addstock(this.stock);
    this.router.navigate(['product'])
  }

}
