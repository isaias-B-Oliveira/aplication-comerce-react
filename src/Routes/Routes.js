import React, { useContext } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { UserContext } from "../Context/userContext";
import Home from "../Pages/Home/Home";
import Dashboard from "../Pages/Dashboard/Dashboard";

function Rotas() {
    const [userData, setUserData] = useContext(UserContext);
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" exact Component={Home} />
                <Route
                    path="/dashboard"
                    element={
                        userData.isLogged ? <Dashboard /> : <Navigate to="/" />
                    }
                />
            </Routes>
        </BrowserRouter>
    );
}

export default Rotas;
