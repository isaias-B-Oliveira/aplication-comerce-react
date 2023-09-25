import React from "react";
import Navbar from "../../Components/Navbar/Navbar";

import DeletableCard from "../../Components/DeletableCards/DeletableCards";

function Dashboard() {
    return (
        <>
            <Navbar />
            <section className="input-section">
                <form>
                    <h1>Cadastrar Produtos</h1>
                    <div className="products-inputs">
                        <input type="text" placeholder="Nome do produto" />
                        <input
                            type="number"
                            min={0}
                            placeholder="Preço do produto"
                        />
                        <button>Adicionar Produto</button>
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
