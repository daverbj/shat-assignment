const express = require("express")
const mongoose = require("mongoose")
var cors = require('cors')
const {mongoUri, options} = require("./config/mongo-config")
const routes = require("./routes")
mongoose
    .connect(mongoUri, options)
    .then(() => {
        const app = express()
        app.use(express.json())
        app.use(cors())
        app.use("/api", routes)
        app.listen(5001, () => {
            console.log("Server has started at 5001")
        })
    })