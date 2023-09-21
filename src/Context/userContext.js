import React, { createContext, useState } from "react";

export const UserContext = createContext();

export function UserProvider(props) {
    const [userData, setUserData] = useState({
        isLogged: true,
        messege: "ola",
    });

    return (
        <UserContext.Provider value={[userData, setUserData]}>
            {props.children}
        </UserContext.Provider>
    );
}
