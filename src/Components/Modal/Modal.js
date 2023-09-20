import React, { useState } from "react";
import LoginModal from "../LoginModal/LoginModal";
import RegisterModal from "../RegisterModal/RegisterModal";

function Modal() {
    const [isLogin, setisLogin] = useState(true);

    function setLoginForm() {
        setisLogin(true);
    }
    function setRegisterForm() {
        setisLogin(false);
    }

    return (
        <div className="backdrop">
            {isLogin ? (
                <LoginModal setRegisterForm={setRegisterForm} />
            ) : (
                <RegisterModal setLoginForm={setLoginForm} />
            )}
        </div>
    );
}

export default Modal; //video 2 // 33.25
