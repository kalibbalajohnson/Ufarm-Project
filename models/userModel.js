const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");

const userSchema = new mongoose.Schema({
    firstname: {
        type: String,
        trim: true
    },

    lastname: {
        type: String,
        trim: true
    },

    username: {
        type: String,
        trim: true,
        required:true,
        unique:true
    },

    email: {
        type: String,
        trim: true,
        unique:true
    },

    role: {
        type: String,
        trim: true
        
    },

    address: {
        type: String,
        trim: true
    },

    ward: {
        type: String,
        trim: true
    },

    password: {
        type: String,
    },

})
userSchema.plugin(passportLocalMongoose, );
module.exports = mongoose.model("User", userSchema)
