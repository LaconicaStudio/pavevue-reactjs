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

    return (
        <PVContext.Provider value={{
            isLoggedIn,
            setIsLoggedIn
        }}>
            {children}
        </PVContext.Provider>
    );
};
