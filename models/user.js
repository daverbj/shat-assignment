const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    username: String,
    age: Number,
    score: Number,
    password: String
})
userSchema.methods.toJSON = function(){
    let obj = this.toObject()
    delete obj.password
    return obj
}
module.exports = mongoose.model("User", userSchema)