import React, {createContext, useContext, useState, useEffect, useRef} from 'react';

const TOKEN_KEY = "token";

const PVContext = createContext();

export const usePVContext = () => {
    return useContext(PVContext);
};

export const PVContextProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [isLoggedIn, setIsLoggedIn] = useState(!!user);


    const getToken = () => localStorage.getItem(TOKEN_KEY) || "";
    const saveToken = (token) => localStorage.setItem(TOKEN_KEY, token);
    const clearToken = () => localStorage.removeItem(TOKEN_KEY);

    const fetchUser = async () => {
        const token = getToken();
        if (!token) return null;

        const res = await fetch(`http://localhost:3001/user`, {
            headers: { Authorization: `Bearer ${token}` },
        });

        if (!res.ok) throw new Error("Failed to fetch user");
        return await res.json();
    };

    const signInWithToken = async (token) => {
        saveToken(token);
        const user = await fetchUser();
        setUser(user);
        setIsLoggedIn(true)
    };

    const refreshUser = async () => {
        const user = await fetchUser();
        setUser(user);
        setIsLoggedIn(false);
        return user;
    };

    const signOut = () => {
        clearToken();
        setUser(null);
        setIsLoggedIn(false);
    };

    // get user data
    const didInit = useRef(false);

    useEffect(() => {
        if (didInit.current) return;
        didInit.current = true;
        let alive = true;

        (async () => {
            try {
                const token = getToken();
                if (!token) return;
                const user = await fetchUser();
                if (alive) setUser(user);
            } catch (e) {
                clearToken();
                if (alive) setUser(null);
            } finally {
                if (alive) setLoading(false);
            }
        })();
        return () => { alive = false };
    }, [user]);


    useEffect(() => {
        if (!getToken()) setLoading(false);
    }, []);

    return (
        <PVContext.Provider value={{
            user,
            isLoggedIn,
            loading,
            signInWithToken,
            refreshUser,
            getToken,
            signOut
        }}>
            {children}
        </PVContext.Provider>
    );
};
