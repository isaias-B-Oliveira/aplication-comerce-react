import React from "react";
import Logo from "../../assets/logo.png";

function Home() {
    return (
        <>
            <nav>
                <div className="nav-container">
                    <img src={Logo} alt="logo do comercio" />
                    <button>ENTRAR</button>
                </div>
            </nav>

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
                    <div className="card">
                        <h2>Brigadeiro</h2>
                        <h1>R$ 5,00</h1>
                        <div className="card-info">
                            <img src="" alt="" />
                            <p>Casa do Chocolate</p>
                        </div>
                        <div className="card-info">
                            <img src="" alt="" />
                            <p>+55 (88)99999-9999</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Home;
