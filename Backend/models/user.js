const mongoose=require('mongoose');
// mongoose.connect('mongodb://localhost:27017/shopping_site')

const Schema=mongoose.Schema;
const user=new Schema({
     username:String,
     password:String,
     first_name:String,
     last_name:String,
     email:String,
     address:String,
     phone:String,
     gender:String,
     created_by:String,
     created_on:String
    
});


var user_data=mongoose.model('user_datas',user);

module.exports=user_data;