const express = require("express");
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;
const db = require('./DB/Db');
const UserRoutes = require('./Routes/UserRoutes');


app.use(bodyParser.json())

app.use(bodyParser.urlencoded({extended : true}));

app.use('/todo' , UserRoutes)


app.listen(PORT, ()=>{
    console.log(`server is running on PORT : ${PORT} `)
});