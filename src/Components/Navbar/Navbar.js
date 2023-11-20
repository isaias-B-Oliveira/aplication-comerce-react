import React, { useContext } from "react";
import Logo from "../../assets/logo.png";
import { UserContext } from "../../Context/userContext";

function Navbar({ openModal }) {
    const [userData, setUserData] = useContext(UserContext);

    async function logautHandle(e) {
        e.preventDefault();

        setUserData((prevstate) => ({
            ...prevstate,
            isLogged: false,
            email: "",
            name: "",
            _id: "",
        }));
    }

    return (
        <nav>
            <div className="nav-container">
                <img src={Logo} alt="logo do comercio" />
                {userData.isLogged ? (
                    <button onClick={logautHandle}>SAIR</button>
                ) : (
                    <button onClick={openModal}>ENTRAR</button>
                )}
            </div>
        </nav>
    );
}

export default Navbar;
