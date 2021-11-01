const express=require('express');
const router=express.Router();
const role_data=require('../models/role')

//Role adding
router.post('/add',(req,res)=>{
    console.log(req.body);
    //Getting the Date
    var date_ob= new Date;
    var date=("0" + date_ob.getDate()).slice(-2);
    var month=("0" + (date_ob.getMonth()+1 )).slice(-2);
    var year=date_ob.getFullYear();
    //end

    data={
    role_name:req.body.role.name,
    role_desc:req.body.role.desc,
    created_by:req.body.role.created_by,
    created_on:(`${date}/${month}/${year}`)
    }
    var Data=role_data(data);
    Data.save();
    console.log('role data successfully uploaded');
    res.send();
})


//Get role details
router.get('/getrole',(req,res)=>{
    role_data.find()
    .then(data=>{
        if(data){
            res.send(data)
        }else{
            res.status(401).send("invalid attempt");
        }
    })
})


    //role Update
    router.put('/update',(req,res)=>{
        console.log(req.body)
        var date_ob= new Date;
        var date=("0" + date_ob.getDate()).slice(-2);
        var month=("0" + (date_ob.getMonth()+1 )).slice(-2);
        var year=date_ob.getFullYear();

        var id=req.body.role._id,
        role_name=req.body.role.role_name,
        role_desc=req.body.role.role_desc,
        updated_by=req.body.role.username,
        updated_on=(`${date}/${month}/${year}`)

        role_data.findByIdAndUpdate({"_id":id},
        {$set:{
            "role_name":role_name,
            "role_desc":role_desc,
            "updated_by":updated_by,
            "updated_on": updated_on
    }
})
.then(function(){
res.send();
    })
    
    })

        //single role
        router.get('/:id', (req, res) => {
    
            const id = req.params.id;
            role_data.findOne({"_id":id})
              .then((product)=>{
                  res.send(product);
              });
          })

    //role Delete
    router.delete('/remove/:id',(req,res)=>{
        id = req.params.id;
        role_data.findByIdAndDelete({"_id":id})
        .then(()=>{
         
            res.send();
        })
       })  

module.exports=router;