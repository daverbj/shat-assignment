const User = require("../models/user")
const encryptPass = require("../util/encrypt-pass");

async function getUserById(req, res) {
    const user = await User.findById(req.params.id)
    res.send(user)
}
async function createUser(req, res){
    const user = new User({
        username: req.body.username,
        age: req.body.age,
        score: req.body.score,
        password: encryptPass(req.body.password),
    })
    await user.save()
    res.send(user)
}
module.exports = { getUserById, createUser }