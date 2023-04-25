const mongoose = require("mongoose");


const productsSchema = new mongoose.Schema({
    productimage: {
        type: String,
        trim:true
    },  

    productname: {
        type: String,
        trim:true
    },
    ward: {
        type: String,
        trim:true
       
    },
    date: {
        type: String,
        trim:true
       
    },
    price: {
        type: Number,
        trim:true
       
    },
    username: {
        type: String,
        trim:true
       
    },
    quantity: {
        type: String,
        trim:true
       
    },
    pay: {
        type: String,
        trim:true
       
    },
    directions: {
        type: String,
        trim:true
       
    },
    delivery: {
        type: String,
        trim:true
       
    },
    type: {
        type: String,
        trim:true
        
    }, 
    phonenumber: {
        type: String,
        trim:true
        
    }, 
    category: {
        type: String,
        trim:true
        
    } 
   
})

module.exports = mongoose.model("Products", productsSchema)
