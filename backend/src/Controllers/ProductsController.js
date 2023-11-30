const Product = require("../Models/Products");
const User = require("../Models/User");

module.exports = {
    // funcao de criaçao dos produtos no db
    async create(req, res) {
        const { name, price } = req.body;
        const { user_id } = req.params;
        const { auth } = req.headers;

        if (user_id !== auth)
            return res.status(400).send({ messege: "unauthorizer" });

        try {
            const userInfo = await User.findById(user_id);
            const { location } = userInfo;
            const longitude = location.coordinates[0];
            const latitude = location.coordinates[1];
            const setLocation = {
                type: "Point",
                coordinates: [longitude, latitude],
            };

            const CreatedProducts = await Product.create({
                name,
                price,
                user: user_id,
                location: setLocation,
            });

            await CreatedProducts.populate("user");

            return res.status(201).send(CreatedProducts);
        } catch (error) {
            return res.status(400).send(error);
        }
    },
    // funcao que deleta os produtos do db
    async delete(req, res) {
        const { product_id, user_id } = req.params;
        const { auth } = req.headers;

        if (user_id !== auth)
            return res.status(400).send({ messege: "unauthorizer" });

        try {
            const deletedProduct = await Product.findByIdAndDelete(product_id);
            return res
                .status(200)
                .send({ status: "deleted", User: deletedProduct });
        } catch (error) {
            return res.status(400).send(error);
        }
    },
    //função que lista todos os produtos do usuario
    async indexByuser(req, res) {
        const { user_id } = req.params;
        const { auth } = req.headers;

        if (user_id !== auth)
            return res.status(400).send({ messege: "unauthorizer" });

        try {
            const allProductsOfUser = await Product.find({
                user: user_id,
            }).populate("user");
            return res.status(200).send(allProductsOfUser);
        } catch (error) {
            return res.status(400).send(error);
        }
    },
    //funçao que lista todos os produtos do db
    async indexAll(req, res) {
        const { longitude, latitude } = req.query;

        const maxDistance = 20000;

        try {
            const allProducts = await Product.find({
                location: {
                    $near: {
                        $geometry: {
                            type: "Point",
                            coordinates: [longitude, latitude],
                        },
                        $maxDistance: maxDistance,
                    },
                },
            })
                .populate("user")
                .limit(24)
                .sort("order");

            return res.status(200).send(allProducts);
        } catch (err) {
            return res.status(400).send(err);
        }
    },
};
