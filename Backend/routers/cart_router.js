const express=require('express');
const router=express.Router();
const cart_data=require('../models/cart')
const stock_data=require('../models/stock');

function checkstock(req,res,next){
 
    stock_id=req.body.cart.stockId;
    total_qty=req.body.cart.total_qty,
    stock_data.findOne({"_id":stock_id})
    .then(data=>{
     
        qty=eval(data.quantity-total_qty);
        if(qty<0){
            res.status(401).send("sorry out of stock")
        }else{
            next()
        }
    })
}

//product adding to the cart
router.post('/add',checkstock,(req,res)=>{
    
    //Getting the Date
    var date_ob= new Date;
    var date=("0" + date_ob.getDate()).slice(-2);
    var month=("0" + (date_ob.getMonth()+1 )).slice(-2);
    var year=date_ob.getFullYear();
    //end

    data={
    stock_id:req.body.cart.stockId,
    total_qty:req.body.cart.total_qty,
    product_name:req.body.cart.product_name,
    image:req.body.cart.image,
    total_price:req.body.cart.total_price,
    created_by:req.body.cart.created_on,
    created_on:(`${date}/${month}/${year}`)
    }
    var Data=cart_data(data);
    Data.save();
    console.log('stock data successfully uploaded');
    res.send();
})


//Get cart details
router.get('/getcart',(req,res)=>{
    cart_data.find()
    .then(data=>{
        if(data){
            res.send(data)
        }else{
            res.status(401).send("invalid attempt");
        }
    })
})


    //cart Update
    router.put('/update',(req,res)=>{
        console.log(req.body)
        var date_ob= new Date;
        var date=("0" + date_ob.getDate()).slice(-2);
        var month=("0" + (date_ob.getMonth()+1 )).slice(-2);
        var year=date_ob.getFullYear();

        stock_id=req.body.cart.stockId,
    total_qty=req.body.cart.total_qty,
    total_price=req.body.cart.total_price,
    created_by=req.body.cart.created_on,
    created_on=(`${date}/${month}/${year}`)

        cart_data.findByIdAndUpdate({"_id":id},
        {$set:{
            "stock_id":stock_id,
            "total_qty":total_qty,
            "total_price":total_price,
            "created_by":created_by,
            "created_on":created_on
    }
})
.then(function(){
res.send();
    })
    
    })

    


    //cart Delete
    router.delete('/remove/:id',(req,res)=>{
        id = req.params.id;
        cart_data.findByIdAndDelete({"_id":id})
        .then(()=>{
            console.log()
            res.send();
        })
       })  

module.exports=router;