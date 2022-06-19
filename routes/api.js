const express = require('express')
const router = express.Router();
const blogDetalis = require('../models/blog')


//getting all
router.get('/my-blog-data',async (req, res)=>{
    try{
        const response = await blogDetalis.find();
        res.json(response)
    }catch(error){
        res.status(500).json({message:error.message})
    }
})

module.exports=router