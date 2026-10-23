const express=require('express')
const app=express();
const port=5000

app.get('/',(req,res)=>
{
 res.send("hello from docker from updated");
});

app.listen(port,()=>
{
 console.log("server started");
});

