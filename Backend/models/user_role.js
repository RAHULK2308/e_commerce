const mongoose=require('mongoose');
// mongoose.connect('mongodb://localhost:27017/shopping_site')

const Schema=mongoose.Schema;
const user_role=new Schema({
 role_id:String,
 user_id:String,
 created_by:String,
 created_on:String,
 updated_by:String,
 updated_on:String,
    
    
});



var user_role_data=mongoose.model('user_role_datas',user_role);

module.exports=user_role_data;