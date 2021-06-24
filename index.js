const express = require("express")
const mongoose = require("mongoose")
const {mongoUri, options} = require("./config/mongo-config")

mongoose
    .connect(mongoUri, options)
    .then(() => {
        const app = express()
        //app.use("/api", routes)

        app.listen(5000, () => {
            console.log("Server has started!")
        })
    })