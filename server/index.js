const express=require('express');

const app=express();

PORT=8000;
//comment
app.get('/',()=>{
    console.log("Start the Devops");
})


app.listen(PORT,()=>{
    console.log(`The PORT is running ${PORT}`)
})