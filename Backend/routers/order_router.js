const express=require('express');
const router=express.Router();
const order_data=require('../models/order')

//order adding
router.post('/add',(req,res)=>{
   

    //Getting the Date
    var date_ob= new Date;
    var date=("0" + date_ob.getDate()).slice(-2);
    var month=("0" + (date_ob.getMonth()+1 )).slice(-2);
    var year=date_ob.getFullYear();
    //end

    data={
    stock_id:req.body.order.stock_id,
    total_qty:req.body.order.total_qty,
    product_name:req.body.order.product_name,
    total_price:req.body.order.total_price,
    status:"pending",
    created_by:req.body.order.created_by,
    created_on:(`${date}/${month}/${year}`)
    }
    var Data=order_data(data);
    Data.save();
    console.log('order successfully placed');
    res.send();
})

//Get order details
router.get('/getorder',(req,res)=>{
    order_data.find()
    .then(data=>{
        if(data){
            res.send(data)
        }else{
            res.status(401).send("invalid attempt");
        }
    })
})


    //order Update cancel
    router.put('/update/cancel',(req,res)=>{
   
        var date_ob= new Date;
        var date=("0" + date_ob.getDate()).slice(-2);
        var month=("0" + (date_ob.getMonth()+1 )).slice(-2);
        var year=date_ob.getFullYear();

        var id=req.body._id,
        updated_by="admin",
        updated_on=(`${date}/${month}/${year}`)
        order_data.findByIdAndUpdate({"_id":id},
        {$set:{
           "status":"cancelled",
            "updated_by":updated_by,
            "updated_on": updated_on
    }
})
.then(function(){
res.send();
    })
    })

    //order Update delivered
    router.put('/update/delivered',(req,res)=>{
        console.log(req.body)
        var date_ob= new Date;
        var date=("0" + date_ob.getDate()).slice(-2);
        var month=("0" + (date_ob.getMonth()+1 )).slice(-2);
        var year=date_ob.getFullYear();

        var id=req.body._id,
        updated_by="admin",
        updated_on=(`${date}/${month}/${year}`)

        order_data.findByIdAndUpdate({"_id":id},
        {$set:{
           "status":"delivered",
            "updated_by":updated_by,
            "updated_on": updated_on
    }
})
.then(function(){
res.send();
    })
    
    })


module.exports=router;