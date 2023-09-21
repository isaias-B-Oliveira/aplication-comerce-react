import React, { useContext } from "react";
import { BrowserRouter, Routes, Route, Redirect } from "react-router-dom";
import { UserContext } from "../Context/userContext";
import Home from "../Pages/Home/Home";
import Dashboard from "../Pages/Dashboard/Dashboard";

function Rotas() {
    const [userData, setUserData] = useContext(UserContext);
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" exact Component={Home} />
                <Route path="/dashboard">
                    {userData.isLogged ? <Dashboard /> : <Redirect to="/" />}
                </Route>
                video 3 // 39,49
            </Routes>
        </BrowserRouter>
    );
}

export default Rotas;
