const User = require("../Models/User");
const bcrypt = require("bcrypt");

async function hashpassword(password) {
    try {
        const salt = await bcrypt.genSalt(10);
        const encryptedPassword = await bcrypt.hash(password, salt);
        return encryptedPassword;
    } catch (error) {
        return error;
    }
}

module.exports = {
    async create(req, res) {
        const { name, whatsapp, email, password, latitude, longitude } =
            req.body;

        const location = {
            type: "Point",
            coordinates: [latitude, longitude],
        };

        try {
            const userExist = await User.findOne({ email });
            if (userExist)
                return res
                    .status(400)
                    .send({ messege: "usuario ja cadastrado" });

            const hashedpassword = await hashpassword(password);

            const createrUser = await User.create({
                name,
                whatsapp,
                email,
                password: hashedpassword,
                location,
            });
            return res.status(201).send(createrUser);
        } catch (error) {
            return res.status(400).send(error);
        }
    },
    //

    async delete(req, res) {
        const { user_id } = req.params;
        const { auth } = req.headers;

        if (user_id !== auth)
            return res.status(400).send({ messege: "unauthorizer" });

        try {
            const deletedUser = await User.findByIdAndDelete(user_id);

            res.status(200).send({ status: "deletado", user: deletedUser });
        } catch (error) {
            return res.status(400).send(error);
        }
    },
    //

    async index(req, res) {
        try {
            const allUses = await User.find();
            return res.status(200).send(allUses);
        } catch (error) {
            return res.status(400).send(error);
        }
    },
};
