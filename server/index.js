const express = require('express')

const app = express();

app.get('/',(req,res)=>{
    res.send("Home Page");
})

app.get('/about',(req,res)=>{
    const { name } = req.query;
    res.send(`Hi ${name}`)
})

app.listen(8000,()=>{
    console.log("Server Started")
})