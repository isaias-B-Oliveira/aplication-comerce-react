import React from "react";
import { Link } from "react-router-dom";

function RegisterModal({ setLoginForm }) {
    return (
        <div className="modal">
            <h1>CADASTRAR</h1>
            <form>
                <input type="text" placeholder="Nome" />
                <input type="text" placeholder="Whatsapp" />
                <input type="text" placeholder="Email" />
                <input type="text" placeholder="Senha" />
                <button>Cadastrar</button>
                <Link onClick={setLoginForm}>Já tenho conta</Link>
            </form>
        </div>
    );
}

export default RegisterModal;
