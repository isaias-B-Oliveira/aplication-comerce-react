import React from "react";

function DeletableCard({
    name,
    price,
    userName,
    userwhats,
    deleteProductHandler,
}) {
    return (
        <div className="card">
            <button onClick={deleteProductHandler}>Excluir</button>

            <h2>{name}</h2>
            <h1>R$ {price}</h1>
            <div className="card-info">
                <div className="card-info-details">
                    <p>{userName}</p>
                </div>
                <div className="card-info-details">
                    <p>{userwhats}</p>
                </div>
            </div>
        </div>
    );
}

export default DeletableCard;
