import React, { useState, useContext, useEffect } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import DeletableCard from "../../Components/DeletableCards/DeletableCards";
import { UserContext } from "../../Context/userContext";
import api from "../../Services/Api";

function Dashboard() {
    const [userData, setUserData] = useContext(UserContext);

    const [productname, setProductName] = useState("");
    const [productprice, setProductPrice] = useState("");

    const [productsData, setProductsdata] = useState([]);

    useEffect(() => {
        getUsesProducts();
    }, [productsData]);

    async function newProductHandle(e) {
        e.preventDefault();

        try {
            await api.post(
                //"/:user_id/products",
                `${userData._id}/product`,
                {
                    name: productname,
                    price: productprice,
                },
                {
                    headers: {
                        auth: userData._id,
                    },
                }
            );
            alert("Produto cadastrado com sucesso");
            setProductName("");
            setProductPrice("");
        } catch (error) {
            alert("Erro ao cadastrar o Produto");
        }
    }

    async function getUsesProducts() {
        try {
            // Rota ariginal da api "/products/:user_id"
            const userProdutsData = await api.get(`/product/${userData._id}`, {
                headers: {
                    auth: userData._id,
                },
            });
            const { data } = userProdutsData;
            setProductsdata(data);
        } catch (error) {
            alert("Erro ao busca os produtos do usuario");
        }
    }

    async function deleteProductHandler(product_id) {
        try {
            await api.delete(`/${userData._id}/product/${product_id}`, {
                headers: {
                    auth: userData._id,
                },
            });
            alert("Produto removido com sucesso!");
        } catch (err) {
            alert("Erro ao deletar produto");
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
                    {productsData.map((product) => (
                        <DeletableCard
                            key={product._id}
                            name={product.name}
                            price={product.price}
                            userName={product.user.name}
                            userwhats={product.user.whatsapp}
                            deleteProductHandler={() => {
                                deleteProductHandler(product._id);
                            }}
                        />
                    ))}
                </div>
            </section>
        </>
    );
}

export default Dashboard;
