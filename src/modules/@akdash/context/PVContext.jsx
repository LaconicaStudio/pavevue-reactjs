import React, {createContext, useContext, useState, useEffect, useRef} from 'react';

const PVContext = createContext();

export const usePVContext = () => {
    return useContext(PVContext);
};

export const PVContextProvider = ({children}) => {
    const [isLoggedIn, setIsLoggedIn] = useState(true);


    return (
        <PVContext.Provider value={{
            isLoggedIn,
            setIsLoggedIn
        }}>
            {children}
        </PVContext.Provider>
    );
};
