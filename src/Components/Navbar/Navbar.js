import React from "react";
import Logo from "../../assets/logo.png";

function Navbar() {
    return (
        <nav>
            <div className="nav-container">
                <img src={Logo} alt="logo do comercio" />
                <button>ENTRAR</button>
            </div>
        </nav>
    );
}

export default Navbar;
