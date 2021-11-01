const mongoose=require('mongoose');
// mongoose.connect('mongodb://localhost:27017/shopping_site')

const Schema=mongoose.Schema;
const stock=new Schema({
     product_name:String,
     product_desc:String,
     price_unit:Number,
     quantity:String,
     image:String,
     created_by:String,
     created_on:String,
     updated_by:String,
     updated_on:String
    
});



var stock_data=mongoose.model('stock_datas',stock);

module.exports=stock_data;