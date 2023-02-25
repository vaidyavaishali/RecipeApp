const mongoose = require("mongoose")
const express = require("express")
const app = express()
const cors = require("cors")
const bodyParser = require("body-parser")
const user_routes = require("./routes/user_Routes")
const JWT = require("jsonwebtoken")
const recipe_route = require("./routes/recipe_routes")
app.use(bodyParser.json())
app.use(cors())
const port = 8000;
// app.use()
mongoose.connect("mongodb+srv://recipe:recipe@cluster0.ga9qrj1.mongodb.net/?retryWrites=true&w=majority", () => {
    console.log("Connectd to DB")
})
app.use("/recipe", (req, res, next) => {
    try {
        const token = req.headers.authorization
        if (token) {
            let decoded = JWT.verify(token, "Auth")
            req.user = decoded.data,
                next()
        } else {
            res.json({
                status: "Failed",
                result: "Token is missing"
            })
        }
    } catch (e) {
        res.json({
            status: "Failed",
            message: e.message
        })
    }
})
app.use("/", user_routes)
app.use("/", recipe_route)
app.listen(port, () => {
    console.log(`Server Running on port ${port}`)
})

