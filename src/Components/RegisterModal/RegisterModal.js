import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../Context/userContext";
import api from "../../Services/Api";

function RegisterModal({ setLoginForm }) {
    const [name, setName] = useState("");
    const [whatsapp, setWhatsapp] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [latitude, setLatitude] = useState(0);
    const [longitude, setLongitude] = useState(0);

    useEffect(() => {
        getUserLocation();
    }, []);

    async function registerHandle(e) {
        e.preventDefault();

        try {
            await api.post("/user", {
                name,
                whatsapp,
                email,
                password,
                latitude,
                longitude,
            });
            alert("Cadastro realizado com sucesso");
        } catch (error) {
            alert("Erro ao cadastra o usuario");
        }
    }

    async function getUserLocation() {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const { latitude, longitude } = position.coords;
                setLatitude(latitude);
                setLongitude(longitude);
            },
            (err) => {
                console.log(err);
            },
            { timeout: 10000 }
        );
    }

    return (
        <div className="modal">
            <h1>CADASTRAR</h1>
            <form>
                <input
                    type="text"
                    placeholder="Nome"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Whatsapp"
                    value={whatsapp}
                    onChange={(e) => setWhatsapp(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Senha"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button onClick={registerHandle}>Cadastrar</button>
                <Link onClick={setLoginForm}>Já tenho conta</Link>
            </form>
        </div>
    );
}

export default RegisterModal;
