const express = require('express');
const app = express();

app.get("/",(req,res)=>{
    res.send("The server is on");
});

app.listen(8000, ()=>{
    console.log("server is listening on port 8000");
})