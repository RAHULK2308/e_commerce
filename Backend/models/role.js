const mongoose=require('mongoose');
// mongoose.connect('mongodb://localhost:27017/shopping_site')

const Schema=mongoose.Schema;
const role=new Schema({
     role_name:String,
     role_desc:String,
     created_by:String,
     created_on:String,
     updated_by:String,
     updated_on:String
    
});



var role_data=mongoose.model('role_datas',role);

module.exports=role_data;