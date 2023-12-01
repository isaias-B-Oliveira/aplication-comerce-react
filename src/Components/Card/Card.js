import React from "react";

function Card({ name, price, userName, userWhats }) {
    return (
        <div className="card">
            <h2>{name}</h2>
            <h1>R$ {price}</h1>
            <div className="card-info">
                <div className="card-info-details">
                    <p>{userName}</p>
                </div>
                <div className="card-info-details">
                    <p>{userWhats}</p>
                </div>
            </div>
        </div>
    );
}

export default Card;
