const express = require('express');
const Model = require('../models/UserModels');
const router= express.Router();

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

//getbyid

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

module.exports = router;