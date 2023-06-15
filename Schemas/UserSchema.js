const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({

    Title : {
        type : String,
        required : true,
        unique : true
    },

    Description : {
        type : String,
        required : false,
    },

    Completed : {
        type : Boolean,
        required : false
        
    }
})


const User = mongoose.model("User", UserSchema)

module.exports = User;