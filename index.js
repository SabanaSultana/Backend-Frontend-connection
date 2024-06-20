const express=require("express")
// import express from express
require("dotenv").config()

const app=express()

port=4000

const fruitsData={
    apple:1,
    banana:2
}
app.get('/',(req,res)=>{
    res.send("This is home route")
})
app.get('/login',(req,res)=>{
    res.send("This is login  route")
})
app.get('/fruits',(req,res)=>{
    res.json(fruitsData)
})

app.listen(process.env.PORT,()=>{
    console.log(`app is listening at port ${port}`)
})