import React, { useState, useContext } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import DeletableCard from "../../Components/DeletableCards/DeletableCards";
import { UserContext } from "../../Context/userContext";
import api from "../../Services/Api";

function Dashboard() {
    const [productname, setProductName] = useState("");
    const [productprice, setProductPrice] = useState("");

    const [userData, setUserData] = useContext(UserContext);

    async function newProductHandle(e) {
        e.preventDefault();

        try {
            await api.post(
                //"/:user_id/products",
                `${userData._id}/products`,
                {
                    name: productname,
                    price: productprice,
                },
                {
                    headers: {
                        auth: userData._id,
                    },
                } // video 7 18:43
            );
            alert("Produto cadastrado com sucesso");
        } catch (error) {
            alert("Erro ao cadastrar o Produto");
        }
    }

    return (
        <>
            <Navbar />
            <section className="input-section">
                <form>
                    <h1>Dashboard para Cadastrar Produtos </h1>
                    <div className="products-inputs">
                        <input
                            type="text"
                            placeholder="Nome do produto"
                            value={productname}
                            onChange={(e) => setProductName(e.target.value)}
                        />
                        <input
                            type="number"
                            min={0}
                            placeholder="Preço do produto"
                            value={productprice}
                            onChange={(e) => setProductPrice(e.target.value)}
                        />
                        <button onClick={newProductHandle}>
                            Adicionar Produto
                        </button>
                    </div>
                </form>
            </section>

            <section className="products-section">
                <div className="products-container">
                    <DeletableCard />
                    <DeletableCard />
                    <DeletableCard />
                    <DeletableCard />
                </div>
            </section>
        </>
    );
}

export default Dashboard;
