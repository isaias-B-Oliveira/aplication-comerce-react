const Product = require("../Models/Products");

module.exports = {
    async create(req, res) {
        const { name, price } = req.body;
        const { user_id } = req.params;

        try {
            const CreatedProducts = await Product.create({
                name,
                price,
                user: user_id,
            });

            await CreatedProducts.populate("user");

            return res.status(201).send(CreatedProducts);
        } catch (error) {
            return res.status(400).send(error);
        }
    },
    async delete(req, res) {
        //video 4 // 1:13:28
    },
    async indexByuser(req, res) {
        //
    },
    async indexAll(req, res) {
        //
    },
};
