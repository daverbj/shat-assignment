const express = require("express")
const mongoose = require("mongoose")
const {mongoUri, options} = require("./config/mongo-config")
const routes = require("./routes")

mongoose
    .connect(mongoUri, options)
    .then(() => {
        const app = express()
        app.use(express.json())
        app.use("/api", routes)
        app.listen(5000, () => {
            console.log("Server has started!")
        })
    })