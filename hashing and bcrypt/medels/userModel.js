const mongoose = require("mongoose");

const userSchme= mongoose.Schema({

    
    name:String, 
    age:Number, 
    email:String, 
    password:String
})

const UserModel = mongoose.model("users", userSchme)

module.exports = {
    UserModel
}