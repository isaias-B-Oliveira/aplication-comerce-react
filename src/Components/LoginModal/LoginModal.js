import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../../Services/Api";
import { UserContext } from "../../Context/userContext";

function LoginModal({ setRegisterForm }) {
    const [userData, setUserData] = useContext(UserContext);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    async function loginHandle(e) {
        e.preventDefault();
        try {
            const userData = await api.post("/session", {
                email,
                password,
            });
            setUserData((prevstate) => ({ ...prevstate, isLogged: true }));
            navigate("/Dashboard");
        } catch (error) {
            alert("falha no login");
        }
    } /// video 5 26:38

    return (
        <div className="modal">
            <h1>ENTRAR</h1>
            <form>
                <input
                    type="text"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Senha"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button onClick={loginHandle}>Entrar</button>
                <Link onClick={setRegisterForm}>criar conta</Link>
            </form>
        </div>
    );
}

export default LoginModal;
