import React, { useState } from "react";
import LoginModal from "../LoginModal/LoginModal";
import RegisterModal from "../RegisterModal/RegisterModal";

function Modal({ closeModal }) {
    const [isLogin, setisLogin] = useState(true);

    function setLoginForm() {
        setisLogin(true);
    }
    function setRegisterForm() {
        setisLogin(false);
    }

    return (
        <div className="backdrop">
            <button className="close-modal" onClick={closeModal}>
                FECHAR
            </button>
            {isLogin ? (
                <LoginModal setRegisterForm={setRegisterForm} />
            ) : (
                <RegisterModal setLoginForm={setLoginForm} />
            )}
        </div>
    );
}

export default Modal; //video 2 // 33.25
