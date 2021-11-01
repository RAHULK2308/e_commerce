const express=require('express');
const router=express.Router();
const stock_data=require('../models/stock');
const cart_data=require('../models/cart')

//stock adding
router.post('/add',(req,res)=>{
    
    //Getting the Date
    var date_ob= new Date;
    var date=("0" + date_ob.getDate()).slice(-2);
    var month=("0" + (date_ob.getMonth()+1 )).slice(-2);
    var year=date_ob.getFullYear();
    //end

    data={
    product_name:req.body.stock.product_name,
    product_desc:req.body.stock.product_desc,
    price_unit:req.body.stock.price_unit,
    quantity:req.body.stock.quantity,
    image:req.body.stock.image,
    created_by:req.body.stock.created_on,
    created_on:(`${date}/${month}/${year}`)
    }
    var Data=stock_data(data);
    Data.save();
    console.log('stock data successfully uploaded');
    
})


//Get stock details
router.get('/getstock',(req,res)=>{
    stock_data.find()
    .then(data=>{
        
            res.send(data)
       
    })
})
    //stock Update
    router.put('/update',(req,res)=>{
        console.log(req.body)
        var date_ob= new Date;
        var date=("0" + date_ob.getDate()).slice(-2);
        var month=("0" + (date_ob.getMonth()+1 )).slice(-2);
        var year=date_ob.getFullYear();

        var id=req.body.stock._id,
        product_name=req.body.stock.product_name,
         product_desc=req.body.stock.product_desc,
        price_unit=req.body.stock.price_unit,
        image=req.body.stock.image,
        quantity=req.body.stock.quantity,
        updated_by=req.body.role.username,
        updated_on=(`${date}/${month}/${year}`)

        stock_data.findByIdAndUpdate({"_id":id},
        {$set:{
            "product_name": product_name,
            "product_desc":product_desc,
            "price_unit":  price_unit,
            "image":image,
            "quantity":quantity,
            "updated_by":updated_by,
            "updated_on": updated_on
    }
})
.then(function(){
res.send();
    })
    
    })

    
    function balanceqty(req,res,next){
        console.log(req.body)
        id=req.body.id;
        stock_data.findOne({"_id":id})
        .then(product=>{
            balance_qty=product.quantity;
        cart_data.find({"stock_id":id})
        .then(data=>{
            data.forEach(data=>{
                balance_qty =eval(balance_qty-data.total_qty);
                stock_data.findByIdAndUpdate({"_id":id},
                {$set:{
                    "quantity":balance_qty,
            }
        })
        .then(function(){
            next();
        })
                
    })
    })
    })
    }
   

    //single product
    router.get('/:id', (req, res) => {
    
        const id = req.params.id;
        stock_data.findOne({"_id":id})
          .then((product)=>{
              res.send(product);
          });
      })

    //stock Delete
    router.delete('/remove/:id',(req,res)=>{
        id = req.params.id;
        stock_data.findByIdAndDelete({"_id":id})
        .then(()=>{
            console.log()
            res.send();
        })
       })  

module.exports=router;