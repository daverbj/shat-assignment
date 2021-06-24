const mongoose = require("mongoose")

const schema = mongoose.Schema({
    username: String,
    age: Number,
    score: Number,
    password: String
})

module.exports = mongoose.model("User", schema)