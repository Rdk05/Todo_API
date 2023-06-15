const mongoose = require('mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/Todos", {useNewUrlParser : true})



const db = mongoose.connection;


db.on("error" , function(){
    console.log("Mongo DB Not Connected ): ");
});


db.once("open" , function(){
    console.log("Successfully connected with Mongo DB");
});


module.exports = db;