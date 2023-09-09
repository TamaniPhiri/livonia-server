const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const clientRouter = require('./src/routers/client-routers');
const adminRouter = require('./src/routers/admin-routes');
const userRouter = require('./src/routers/user-routes');
const loginRouter = require('./src/routers/login-routes');
const inventoryRouter = require('./src/routers/inventory-router');

app.use(bodyParser.json());
app.get("/",(req,res)=>{
    res.send("The server is on");
});
app.use('/clients',clientRouter);
app.use('/admin',adminRouter);
app.use('/user',userRouter);
app.use('/login',loginRouter);
app.use('/inventory',inventoryRouter);

app.listen(8000, ()=>{
    console.log("server is listening on port 8000");
})