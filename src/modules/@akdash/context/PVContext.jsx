import React, {createContext, useContext, useState, useEffect, useRef} from 'react';

const PVContext = createContext();

export const usePVContext = () => {
    return useContext(PVContext);
};

export const PVContextProvider = ({children}) => {
    const [isLoggedIn, setIsLoggedIn] = useState(() => {
        const saved = localStorage.getItem("isLoggedIn");
        return saved ? JSON.parse(saved) : false;
    });

    useEffect(() => {
        localStorage.setItem("isLoggedIn", JSON.stringify(isLoggedIn));
    }, [isLoggedIn]);

    const signIn = () => {
        setIsLoggedIn(true);
        localStorage.setItem("isLoggedIn", "true");
    };

    const signOut = () => {
        setIsLoggedIn(false);
        localStorage.removeItem("isLoggedIn");
    };

    return (
        <PVContext.Provider value={{
            isLoggedIn,
            setIsLoggedIn,
            signIn,
            signOut
        }}>
            {children}
        </PVContext.Provider>
    );
};
