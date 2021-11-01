const express=require('express');
const router=express.Router();
const user_data=require('../models/user');
const jwt = require('jsonwebtoken');

//middleware checking user already exist or not
function checkuser(req,res,next){
    var username=req.body.user.username;
    var password=req.body.user.password;
    user_data.findOne({"username":username,"password":password})
    .then(data=>{
        if(data){
            res.status(401).send("user already exists");
            
        }else{
            next()
        }
})
}

//User Registeration
router.post('/register',checkuser,(req,res)=>{

    //Getting the Date
    var date_ob= new Date;
    var date=("0" + date_ob.getDate()).slice(-2);
    var month=("0" + (date_ob.getMonth()+1 )).slice(-2);
    var year=date_ob.getFullYear();
    //end
    data={
     username:req.body.user.username,
     password:req.body.user.password,
     first_name:req.body.user.first_name,
     last_name:req.body.user.last_name,
     email:req.body.user.email,
     address:req.body.user.address,
     phone:req.body.user.phone,
     gender:req.body.user.gender,
     created_by:req.body.user.username,
     created_on:(`${date}/${month}/${year}`)
    }
    var Data=user_data(data);
    Data.save();
    console.log('user data successfully uploaded');
    res.send("success");
})

admin='admin@gmail.com';
password='12345678';

function checkadmin(req,res, next){
    
    uname=req.body.username;
    upassword=req.body.password;

    user_data.findOne({username:uname,password:upassword})
   .then(function(data){
     if(admin == uname && password == upassword){
       console.log("You are in Admin");
       next()
     } else if (uname==data?.username && upassword == data?.password){
       console.log("you are in user")
       next()}else{
       res.status(401).send('Invalid Login Attempt')
     }})}  

//User Login
router.post('/login',checkadmin,(req,res)=>{

    var username=req.body.username;
    var userpassword=req.body.password;
   
  if(username==admin && userpassword==password){
          let payload = {subject: admin+password}
          let token = jwt.sign(payload, 'secretKey')
          res.status(200).send({token})
  }else{
    let payload = {subject: userpassword+username}
          let token = jwt.sign(payload, 'secretKey')
          res.status(200).send({token})}})

//Get user details
router.get('/getuser',(req,res)=>{
    user_data.find()
    .then(data=>{
        if(data){
            res.send(data)
        }else{
            res.status(401).send("invalid attempt");
        }
    })
})


    //User Update
    router.put('/update',(req,res)=>{
        console.log(req.body)
        var date_ob= new Date;
        var date=("0" + date_ob.getDate()).slice(-2);
        var month=("0" + (date_ob.getMonth()+1 )).slice(-2);
        var year=date_ob.getFullYear();

        var id=req.body.user._id,
        username=req.body.user.username,
        password=req.body.user.password,
        first_name=req.body.user.first_name,
        last_name=req.body.user.last_name,
        email=req.body.user.email,
        address=req.body.user.address,
        phone=req.body.user.phone,
        gender=req.body.user.gender,
        created_by=req.body.user.username,
        created_on=(`${date}/${month}/${year}`)

        user_data.findByIdAndUpdate({"_id":id},
        {$set:{
            "username":username,
            "password":password,
            "first_name":first_name,
            "last_name":last_name,
            "email":email,
            "address":address,
            "phone":phone,
            "gender":gender,
            "created_by":created_by,
            "created_on":created_on,
    }
})
.then(function(){
res.send("success");
    })
    
    })

       //single user
       router.get('/user/:id', (req, res) => {
    
        const id = req.params.id;
        user_data.findOne({"_id":id})
          .then((product)=>{
              res.send(product);
          });
      })

    //User Delete
    router.delete('/remove/:id',(req,res)=>{
        id = req.params.id;
        user_data.findByIdAndDelete({"_id":id})
        .then(()=>{
            console.log("deleted")
            res.send();
        })
       })  


module.exports=router;