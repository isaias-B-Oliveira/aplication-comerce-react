const mongoose = require("mongoose");
const PointSchema = require("./Utils/PointSchema");

const Schema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    price: {
        type: Number,
        require: true,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        require: true,
    },
    location: {
        type: PointSchema,
        index: "2dsphere",
    },
});

module.exports = mongoose.model("Products", Schema);
