const express=require('express');
const router=express.Router();
const user_role=require('../models/user_role')

//Role adding
router.post('/add',(req,res)=>{
    
    //Getting the Date
    var date_ob= new Date;
    var date=("0" + date_ob.getDate()).slice(-2);
    var month=("0" + (date_ob.getMonth()+1 )).slice(-2);
    var year=date_ob.getFullYear();
    //end
  
    data={
    role_id:req.body.urole.role,
    user_id:req.body.urole.user,
    created_by:req.body.urole.created_on,
    created_on:(`${date}/${month}/${year}`)
    }
    var Data=user_role(data);
    Data.save();
    console.log('role data successfully uploaded');
    res.send();
})

//Get role details
router.get('/getuserrole',(req,res)=>{
    user_role.find()
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

        var id=req.body.urole._id,
        role_id=req.body.urole.role,
        user_id=req.body.urole.user_id,
        updated_by="admin",
        updated_on=(`${date}/${month}/${year}`)

        user_role.findByIdAndUpdate({"_id":id},
        {$set:{
            "role_id":role_id,
            "user_id":user_id,
            "updated_by":updated_by,
            "updated_on": updated_on
    }
})
.then(function(){
res.send();
    })
    
    })

    //role Delete
    router.delete('/remove/:id',(req,res)=>{
        id = req.params.id;
        user_role.findByIdAndDelete({"_id":id})
        .then(()=>{
            res.send();
        })
       })  

           //single user
           router.get('/:id', (req, res) => {
    
            const id = req.params.id;
            user_role.findOne({"_id":id})
              .then((data)=>{
                  res.send(data);
              });
          })

module.exports=router;