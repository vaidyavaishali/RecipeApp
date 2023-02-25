const mongoose = require("mongoose")
const recipeSchema = new mongoose.Schema({
   title:{type:String, required:true},
   author:{type:String, required:true},
   file:{type:String, required:true},
   ingredients:{type:String, required:true},
   directions:{type:String, required:true},
   user:{type:String, ref:"user_collection"}
})
const recipeModel = mongoose.model("recipe_collection", recipeSchema)
module.exports = recipeModel