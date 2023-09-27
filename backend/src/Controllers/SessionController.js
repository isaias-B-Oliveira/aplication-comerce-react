const User = require("../Models/User");
const bcrypt = require("bcrypt");

module.exports = {
    async create(req, res) {
        const { email, password } = req.body;

        try {
            const userExist = await User.findOne({ email });
            if (!userExist)
                return res.status(400).send({ messege: "usuario não existe" });

            const validPassword = await bcrypt.compare(
                password,
                userExist.password
            );
            if (!validPassword)
                return res.status(400).send({ messege: "password invalido" });

            return res.status(200).send(userExist);
        } catch (error) {
            return res.status(400).send(error);
        }
    },
};
