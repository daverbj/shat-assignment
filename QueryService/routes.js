const express = require("express")
const queryController = require("./controllers/QueryController");
const router = express.Router()

router.get("/user/:id", queryController.getUserById)

module.exports = router