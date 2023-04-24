const mongoose = require("mongoose");


const foRegisterSchema = new mongoose.Schema({
    fullname: {
        type: String,
    },  

    username: {
        type: String,
        trim:true
    },
    phonenumber: {
        type: String,
        trim:true
    },
    dor: {
        type: String,
        trim:true
       
    },
    dob: {
        type: String,
        trim:true
       
    },
    period: {
        type: Number,
        trim:true
       
    },
    activities: {
        type: String,
       
    },
    directions: {
        type: String,
       
       
    },
    nin: {
        type: String,
        trim:true
       
    },
    gender: {
        type: String,
        trim:true
       
    },

    residence: {
        type: String,
        trim:true
        
    }, 
    ward: {
        type: String,
        trim:true
        
    } 
   
})

module.exports = mongoose.model("foRegister", foRegisterSchema)
