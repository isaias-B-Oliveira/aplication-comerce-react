const mongoose = require("mongoose");

const DBuser = process.env.DB_USER;
const DBpass = process.env.DB_PASS;

const mongoURI = `mongodb+srv://${DBuser}:${DBpass}@cluster0.gxc37h2.mongodb.net/?retryWrites=true&w=majority`;

async function conectarAoBancoDeDados() {
    try {
        await mongoose.connect(mongoURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Conectado ao MongoDB Atlas");
    } catch (error) {
        console.error("Erro ao conectar ao MongoDB Atlas", error);
    }
}

conectarAoBancoDeDados();
module.exports = mongoose;
