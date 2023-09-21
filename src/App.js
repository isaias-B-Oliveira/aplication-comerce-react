import React from "react";
import "./Styles/main.scss";
import Rotas from "./Routes/Routes";
import { UserProvider } from "./Context/userContext";

function App() {
    return (
        <div>
            <UserProvider>
                <Rotas />
            </UserProvider>
        </div>
    );
}

export default App;
