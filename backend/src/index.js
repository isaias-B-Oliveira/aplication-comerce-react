const express = require("express");
const app = express();
const cors = require("cors");
const router = require("./Routes/Router");
require("dotenv").config();
require("./Database/Conections");

app.use(cors());
app.use(express.json());
app.use(router);

app.listen(8080, () => {
    console.log("backend serve running (video 5) 26:38");
});
