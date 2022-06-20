const express = require('express')
const router = express.Router();
const blogDetalis = require('../models/blog')


router.get('/',(req, res)=>{
    res.send(<h1>Ravi Kumar's Blog API documentation will be available soon.</h1>)
})


//getting all
router.get('/api',async (req, res)=>{
    try{
        const response = await blogDetalis.find();
        res.json(response)
    }catch(error){
        res.status(500).json({message:error.message})
    }
})


module.exports=router