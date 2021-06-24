const User = require("../models/user")
const encryptPass = require("../util/encrypt-pass");
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');

async function getUserById(req, res) {
    if (req.loggedInUser._id.toString() !== req.params.id) res.sendStatus(403)
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
async function login(req, res){

    const user = await User.findOne({
        username: req.body.username
    })
    if (user) {
        if ( bcrypt.compareSync(req.body.password, user.password)) {
            const token = jwt.sign({username : user.username, userId: user._id}, process.env.SECRET)
            return res.status(200).json({
                status:"SUCCESS",
                token: token
            })
        } else {
            return res.status(403).json({
                status:"FAIL",
            })
        }
    } else {
        return res.status(403).json({
            status:"FAIL",
        })
    }
}
module.exports = { getUserById, createUser, login }