const { Router } = require("express");
const router = Router();

const UserController = require("../Controllers/UserController");
const SectionController = require("../Controllers/SessionController");
const ProductsController = require("../Controllers/ProductsController");

router.post("/user", UserController.create);
router.get("/user", UserController.index);
router.delete("/user/:user_id", UserController.delete);

router.post("/:user_id/product", ProductsController.create);
router.delete("/:user_id/product/:product_id", ProductsController.delete);
// router.delete("/:user_id/products/:product_id", ProductsController.delete);
router.get("/product", ProductsController.indexAll);
router.get("/product/:user_id", ProductsController.indexByuser);

router.post("/session", SectionController.create);

module.exports = router;
