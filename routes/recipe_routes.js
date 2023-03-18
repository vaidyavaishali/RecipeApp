const bodyParser = require("body-parser")
const express = require("express")
const recipeModel = require("../models/recipe")
const recipe_route = express.Router()
const cloudinary = require("../cloudinary/cloudinary")
const uploader = require("../multer/multer")

recipe_route.use(bodyParser.json())

recipe_route.get("/recipe", async (req, res) => {
    try {
        const recipeData = await recipeModel.find({user:req.user})
        res.status(200).json({
            recipeData
        })
    } catch (e) {
        res.status.json({
            status: "Failed",
            message: e.message
        })
    }
})

recipe_route.post("/recipe", uploader.single("file"), async (req, res) => {
    try {
        console.log(req.body)
        const upload = await cloudinary.v2.uploader.upload(req.file.path)
        const recipe = await recipeModel.create({
            title: req.body.title,
            author: req.body.author,
            file: upload.secure_url,
            ingredients: req.body.ingredients,
            directions: req.body.directions,
            user:req.user
        })
        console.log(recipe)
        res.json({
            status:"success",
            recipe
        })
    } catch (e) {
        res.status(200).json({
            status: "Failed",
            message: e.message
        })
    }
})
module.exports = recipe_route
