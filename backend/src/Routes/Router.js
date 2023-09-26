const { Router } = require("express");
const router = Router();

const UserController = require("../Controllers/UserController");

router.post("/user", UserController.Created);

module.exports = router;
