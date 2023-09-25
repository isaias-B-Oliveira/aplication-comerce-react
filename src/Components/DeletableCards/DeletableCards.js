import React from "react";

function DeletableCard() {
    return (
        <div className="card">
            <button>Excluir</button>

            <h2>Brigadeiro</h2>
            <h1>R$ 5,00</h1>
            <div className="card-info">
                <div className="card-info-details">
                    <p>Casa do Chocolate</p>
                </div>
                <div className="card-info-details">
                    <p>(88)99999-9999</p>
                </div>
            </div>
        </div>
    );
}

export default DeletableCard;
