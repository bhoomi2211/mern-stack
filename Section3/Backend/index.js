const express=require('express');
const app=express();
const UserRouter=require('./routers/Userrouter');
const ProductRouter=require('./routers/ProductRouter');
const cors=require('cors');



const port = 5000;

//middleware
app.use(cors({
    origin:['http://localhost:3000']
}));
app.use(express.json());
app.use("/user",UserRouter);


//endpoint

//product middleware router start
app.use("/product",ProductRouter);
//end

app.get('/',(req ,res)=>{
    res.send('response from express');
});
app.get('/add',(req ,res)=>{
    res.send('response from add ');
});

//getall
app.get('/getall',(req ,res)=>{
    res.send('response from getall');
});
//delete
app.get('/delete',(req ,res)=>{
    res.send('response from delete');
});


//starting the server

app.listen(port, () => {
    console.log("Server started");
});