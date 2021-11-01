const mongoose=require('mongoose');
// mongoose.connect('mongodb://localhost:27017/shopping_site')

const Schema=mongoose.Schema;
const order=new Schema({
     stock_id:String,
     total_qty:String,
     total_price:String,
     product_name:String,
     status:String,
     created_by:String,
     created_on:String,
     updated_by:String,
     updated_on:String
    
    
});



var order_data=mongoose.model('order_datas',order);

module.exports=order_data;