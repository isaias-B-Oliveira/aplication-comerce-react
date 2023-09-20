import React from "react";
import { Link } from "react-router-dom";

function LoginModal({ setRegisterForm }) {
    return (
        <div className="modal">
            <h1>ENTRAR</h1>
            <form>
                <input type="text" placeholder="Email" />
                <input type="text" placeholder="Senha" />
                <button>Entrar</button>
                <Link onClick={setRegisterForm}>criar conta</Link>
            </form>
        </div>
    );
}

export default LoginModal;
