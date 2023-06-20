const express = require('express');
const app = express();//app is a backend application

app.get("/",(req,res)=>{
    res.send("Welcome to Joshua's backend application");
})

app.get("/Joshua",(req,res)=>{
    res.send("Hello Joshua!");
});

app.listen(3000,()=>{
    console.log("Listening");
});