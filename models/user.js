const mongoose = require("mongoose")
const userSchema = mongoose.Schema({
    email : {type:String, unique:true, required:true},
    password:{type: String, required:true} 
})
const userModel = mongoose.model("user_collection", userSchema)

module.exports = userModel