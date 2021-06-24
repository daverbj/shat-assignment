const jwt = require("jsonwebtoken");
const User = require("../models/user")

async function verifyToken(req, res, next) {
    const bearerHeader = req.headers['authorization']
    if (typeof bearerHeader !== 'undefined') {
        const token = bearerHeader.split(' ')[1]
        try {
            const userDetails = jwt.verify(token, process.env.SECRET)
            if (userDetails) {
                const user = await User.findById(userDetails.userId)
                user ? req.loggedInUser = user : res.sendStatus(403)
            } else {
                res.sendStatus(403)
            }
        } catch (e) {
            res.sendStatus(403)
        }
    } else {
        res.sendStatus(403)
    }
    next()
}
module.exports = {verifyToken}