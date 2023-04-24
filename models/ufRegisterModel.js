const mongoose = require("mongoose");


const ufRegisterSchema = new mongoose.Schema({
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
    activities: {
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

    ward: {
        type: String,
        trim:true
        
    } 
   
})

module.exports = mongoose.model("ufRegister", ufRegisterSchema)
