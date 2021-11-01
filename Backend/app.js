const express=require('express');
const cors=require('cors');
const bodyparser=require('body-parser');
const mongoose=require('mongoose');

//Mongoose connection

mongoose.connect('mongodb://localhost:27017/shopping_site')
mongoose.connection.on('connected', ()=>{
    console.log('connected to database')
})
mongoose.connection.on('error', (err)=>{
    console.log(' database error '+err)
})

var app=new express();
const port=3000;
app.use(cors());
app.use(bodyparser.json());

//Requiring Router
const user=require('./routers/user_router');
const cart=require('./routers/cart_router');
const stock=require('./routers/stock_router');
const user_role=require('./routers/user-role_router');
const role=require('./routers/role_router');
const order=require('./routers/order_router');

app.use('/user',user);
app.use('/cart',cart);
app.use('/stock',stock);
app.use('/userrole',user_role);
app.use('/role',role);
app.use('/order',order);


app.get('/', (req,res)=>{
    res.send('invalid output')
})

app.listen(port,function(){
    console.log('server listen on port '+port);
})