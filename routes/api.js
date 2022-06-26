const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();
const blogDetalis = require('../models/blog');

app.use(express.static(path.join(__dirname+'public')));

// const spath = path.join(__dirname);

//Home route
router.get('/',(req, res)=>{
    // res.sendFile((spath+"/public/index.html"));
    res.send("Ravi Kumar Blog's API. Documentation will be made available soon.")
})

//getting all
router.get('/api',async (req, res)=>{
    try{
        const response = await blogDetalis.find().lean();
        const newresponse = JSON.parse(JSON.stringify(response))
        newresponse.map((ele) =>{
                delete ele._id;
                delete ele.__v;
        })
        res.status(200).json(newresponse);
    }catch(error){
        res.status(500).json({message:error.message})
    }   
})


module.exports=router