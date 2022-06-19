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
//getting one
router.get('/:id',(req, res)=>{
    res.send(req.params.id)
})
// creating one
router.post('/',(req, res)=>{

})
// updating one
router.patch('/',(req, res)=>{

})

module.exports=router