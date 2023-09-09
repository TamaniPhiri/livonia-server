const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const clientRouter = require('./src/routers/client-routers');
const adminRouter = require('./src/routers/admin-routes');

app.use(bodyParser.json());
app.get("/",(req,res)=>{
    res.send("The server is on");
});
app.use('/clients',clientRouter);
app.use('/admin',adminRouter);

app.listen(8000, ()=>{
    console.log("server is listening on port 8000");
})