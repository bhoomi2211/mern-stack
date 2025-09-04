const express = require('express');
const Model = require('../models/ProductModel');
const router = express.Router();
const { model } = require('mongoose');

//add new product

router.post('/add',(req,res)=>{
    res.send("response from product router")

    console.log(req.body);
    
        new Model(req.body).save()
        .then((result) => {
            res.status(200).json(result);
        })
        .catch((err) => {
            res.status(500).json(err);
        });
});

//getall
router.get('/getall',(req,res)=>{


 Model.find()
        .then((result) => {
            res.status(200).json(result);
            
        }).catch((err) => {
            console.log(err);
            
            res.status(500).json(err);
        });
    });

    // get by id
router.get('/getbyid',(req,res)=>{

    Model.findById(req.params.id)
    .then((result) => {
        res.status(200).json(result);
        
    }).catch((err) => {
        console.log(err);
        
        res.status(500).json(err);
        
    });
    res.send("getid from product router")
}); 

// delete 
router.get('/delete',(req,res)=>{
    res.send("delete from product router")

Model.findByIdAndDelete(req.params.id)
.then((result) => {
    res.status(200).json(result);
    
}).catch((err) => {
    console.log(err);
    
    res.status(500).json(err);
    
});
});

//update
router.get('/update',(req,res)=>{
    res.send("update from product router")
}   );
 
module.exports = router;