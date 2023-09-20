import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Dashboard from "../Pages/Dashboard/Dashboard";

function Rotas() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" exact Component={Home} />
                <Route path="dashboard" exact Component={Dashboard} />
            </Routes>
        </BrowserRouter>
    );
}

export default Rotas;
