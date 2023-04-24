const mongoose = require("mongoose");

const registerSchema = new mongoose.Schema({
    fullname:{
        type:String,
        
    },
    phone:{
        type:String,
        trim:true
    },
    address:{
        type:String,
        trim:true
    },
    product:{
        type:String,
        trim:true
    },
    price:{
        type:Number,
        trim:true
    },
    quantity:{
        type:Number,
        trim:true
    },
    ship:{
        type:String,
        trim:true
    },
    pay:{
        type:String,
        trim:true
    },
    gender:{
        type:String,
        trim:true
    },

})

module.exports = mongoose.model("Register", registerSchema)