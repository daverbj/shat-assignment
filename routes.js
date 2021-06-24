const express = require("express")
const userController = require("./controllers/user-controller");
const router = express.Router()

router.get("/user/:id", userController.getUserById)
router.post("/user", userController.createUser)
router.post("/login", userController.login)

module.exports = router