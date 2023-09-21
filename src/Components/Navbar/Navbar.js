import React, { useContext } from "react";
import Logo from "../../assets/logo.png";
import { UserContext } from "../../Context/userContext";

function Navbar({ openModal }) {
    const [userData, setUserData] = useContext(UserContext);

    return (
        <nav>
            <div className="nav-container">
                <img src={Logo} alt="logo do comercio" />
                {userData.isLogged ? (
                    <button>SAIR</button>
                ) : (
                    <button onClick={openModal}>ENTRAR</button>
                )}
            </div>
        </nav>
    );
}

export default Navbar;
