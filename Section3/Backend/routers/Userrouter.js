const express = require('express');
const Model = require('../models/UserModels');
const { model } = require('mongoose');
const router= express.Router();
require('dotenv').config();
const jwt = require('jsonwebtoken');
router.post('/add',(req,res)=>{
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
            res.status(500).json(err);
        });
    
});

//url params
router.get('/getbycity/:city',(req,res)=>{
    Model.find({city: req.params.city})
    .then((result) => {
        res.status(200).json(result);
        
    }).catch((err) => {
        console.log(err);
        
        res.status(500).json(err);
        
    });
})
 
//email query

router.get('/getbyemail/:email',(req,res)=>{
    Model.findOne({email: req.params.email})
    .then((result) => {
        res.status(200).json(result);
    }).catch((err) => {
        console.log(err);
        res.status(500).json(err);
        
        
    });
})



//getbyid
router.get('/getbyid/:id',(req,res)=>{
    Model.findById( req.params.id)
    .then((result) => {
        res.status(200).json(result);
    }).catch((err) => {
        console.log(err);
        res.status(500).json(err);
        
        
    });
})


router.delete('/delete/:id',(req,res)=>{
    Model.findByIdAndDelete( req.params.id)
    .then((result) => {
        res.status(200).json(result);
    }).catch((err) => {
        console.log(err);
        res.status(500).json(err);
        
        
    });
})

router.put('/update/:id',(req,res)=>{
    Model.findByIdAndUpdate(req.params.id,req.body ,{new:true})
    .then((result) => {
        res.status(200).json(result);
        
    }).catch((err) => {
        console.log(err);
        res.status(500).json(err);
        
        
    });
})

router.get('/getbyid',(req,res)=>{
    res.send("getid from user router")
})


//delete
router.get('/delete',(req,res)=>{
    res.send("delete from user router")
})
//update

router.get('/update',(req,res)=>{
    res.send("update from user router")
})

router.post('/authenticate',(req,res)=>{
    const {email,password} = req.body;
    Model.findOne({email,password})
    .then((result) => {
        if (result) {
            //create token
            const{_id,name} = result;
            jwt.sign(
                {_id,name},
                process.env.JWT_SECRET,
                {expiresIn:'1h'},
                (err,token) => {
                    if(err){
                        console.log(err);
                        res.status(500).json(err);
                        
                    }
                    else{
                        res.status(200).json({token});
                    }
                }

            )

        }
        else{
            res.status(401).json({message:"invalid credentials"});
        }
    }).catch((err) => {
        console.log(err);
        res.status(500).json(err);
        
        
    });
})

module.exports = router;