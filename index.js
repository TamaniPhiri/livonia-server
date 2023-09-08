const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const clientRouter = require('./src/routers/client-routers');

app.use(bodyParser.json());
app.get("/",(req,res)=>{
    res.send("The server is on");
});
app.use('/clients',clientRouter);

app.listen(8000, ()=>{
    console.log("server is listening on port 8000");
})