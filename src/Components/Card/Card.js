import React, { useContext } from "react";
import { UserContext } from "../../Context/userContext";

function Card() {
    const [userData, setUserData] = useContext(UserContext);

    return (
        <div className="card">
            {userData.isLogged ? <button>Excluir</button> : null}

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

export default Card;
