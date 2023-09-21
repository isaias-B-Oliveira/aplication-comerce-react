import React, { useState } from "react";

import Navbar from "../../Components/Navbar/Navbar";
import Card from "../../Components/Card/Card";
import Modal from "../../Components/Modal/Modal";

function Home() {
    const [isModalOpen, setisModalOpen] = useState(false);

    function openModal() {
        setisModalOpen(true);
    }
    function closeModal() {
        setisModalOpen(false);
    }

    return (
        <>
            <Navbar openModal={openModal} />
            <section className="input-section">
                <form>
                    <h1>Pesquisar Produtos</h1>
                    <div className="form-inputs">
                        <input type="text" placeholder="Pesquisar por nome" />
                        <input
                            type="number"
                            min={0}
                            placeholder="Preço máximo"
                        />
                    </div>
                </form>
            </section>

            <section className="products-section">
                <div className="products-container">
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>
            </section>

            {isModalOpen ? <Modal closeModal={closeModal} /> : null}
        </>
    );
}

export default Home;
