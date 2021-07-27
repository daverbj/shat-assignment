const User = require("../models/user")

async function getUserById(req, res) {
    const user = await User.findById(req.params.id)
    res.send(user)
}
module.exports = { getUserById }