const mongoose=require('mongoose');
// mongoose.connect('mongodb://localhost:27017/shopping_site')

const Schema=mongoose.Schema;
const cart=new Schema({
     stock_id:String,
     image:String,
     product_name:String,
     total_qty:Number,
     total_price:Number,
     created_by:String,
     created_on:String
    
});



var cart_data=mongoose.model('cart_datas',cart);

module.exports=cart_data;