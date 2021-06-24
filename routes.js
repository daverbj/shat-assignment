const express = require("express")
const User = require("./models/user")
const router = express.Router()

// Get all posts
router.get("/user", async (req, res) => {
    const users = await User.find()
    res.send(users)
})

router.post("/user", async (req, res) => {
    console.log(req)
    const user = new User({
        username: req.body.username,
        age: req.body.age,
        score: req.body.score,
        password: req.body.password,
    })
    await user.save()
    res.send(user)
})

module.exports = router