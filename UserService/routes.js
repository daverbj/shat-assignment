const express = require("express")
const userController = require("./controllers/user-controller");
const router = express.Router()
const auth = require("./middlewares/auth")

router.get("/user/:id", auth.verifyToken, userController.getUserById)
router.post("/user", userController.createUser)
router.post("/login", userController.login)

module.exports = router