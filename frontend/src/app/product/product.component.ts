import { Component, OnInit } from '@angular/core';
import { StockService } from '../stock.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  Stock:any=[];
  query:any='';
 
  constructor(public stockservice:StockService, public router:Router,private toastr: ToastrService) { }

  delete(stock:any)
  
  {
    this.toastr.success('Stock Deleted', 'Notification', {
      positionClass: 'toast-bottom-right' });

    this.stockservice.deletestock(stock._id)
      .subscribe(data => {
        this.Stock= this.Stock.filter((p:any) => p !== stock);
       
      })    
}

  ngOnInit(): void {
   this.stockservice.getstockes().subscribe(data=>{
     this.Stock=data;
   })
  }

  edit(stock:any){
    localStorage.setItem("stockId", stock._id.toString());
    this.router.navigate(['updatestock']);
  }



}
