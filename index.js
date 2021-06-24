const express = require("express")
const mongoose = require("mongoose")
const {mongoUri, options} = require("./config/mongo-config")
const routes = require("./routes")
const passport = require('passport')
require("./middlewares/passport")(passport)
mongoose
    .connect(mongoUri, options)
    .then(() => {
        const app = express()
        app.use(express.json())
        app.use(passport.initialize())
        app.use("/api", routes)
        app.listen(5000, () => {
            console.log("Server has started!")
        })
    })