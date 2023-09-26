/* eslint-disable no-unused-vars */
const User = require("../Models/User");

module.exports = {
    async Created(req, res) {
        const { name, whatsapp, email, password, latitude, longitude } =
            req.body;

        const location = {
            type: "Point",
            coordinates: [latitude, longitude],
        };

        try {
            const createrUser = await User.create({
                name,
                whatsapp,
                email,
                password,
                location,
            });
            return res.status(201).send(createrUser);
        } catch (error) {
            return res.status(400).send(error);
        }
    },
};
