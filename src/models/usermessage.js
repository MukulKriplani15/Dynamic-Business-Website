const mongoose = require('mongoose');
const validator = require('validator');

const userSchema = new mongoose.Schema({
    name:{
        type : String,
        required : true,
        minlength : 3
    },
    email:{
        type : String,
        required : true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("Invalid email address");
            }
        }
    },
    phone:{
        type : Number,
        required : true,
        min : 10
    },
    message:{
        type : String,
        required : true,
        minlength : 3
    },
    date:{
        type : Date,
        default : Date.now  // this will automatically set the current date when the document is created
    }
})

// we need a collection 
const User = new mongoose.model("User",userSchema);
module.exports = User;