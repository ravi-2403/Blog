const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = process.env.PORT || 5000;
const route = require('./routes/api'); 
require('dotenv').config()

mongoose.connect(process.env.MONGO_URL,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})

mongoose.connection.on('connected',()=>{
    console.log("Mongoose is connected!!!");
})

// const Schema = mongoose.Schema;

// const blogSchema = new Schema({
//     'title':String,
//     'author':String,
//     'description':String,
// })

// const blogDetail = mongoose.model('Blog',blogSchema);


app.use('/',route);



app.listen(port,()=>{
    console.log("Listening to port number ",port);
})

