const { Router } = require("express");
const router = Router();

const UserController = require("../Controllers/UserController");
const SectionController = require("../Controllers/SessionController");
const ProductsController = require("../Controllers/ProductsController");

router.post("/user", UserController.create);
router.get("/user", UserController.index);
router.delete("/user/:user_id", UserController.delete);

router.post("/:user_id/products", ProductsController.create);

router.post("/session", SectionController.create);

module.exports = router;
