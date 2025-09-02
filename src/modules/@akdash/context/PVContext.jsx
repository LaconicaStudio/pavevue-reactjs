// src/context/PVContext.jsx
import React, {createContext, useContext, useEffect, useMemo, useRef, useState} from "react";

const TOKEN_KEY = "token";
const API = "http://localhost:3001";

const PVContext = createContext(null);
export const usePVContext = () => useContext(PVContext);

export const PVContextProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const isLoggedIn = !!user; // похідний стан

    const getToken = () => localStorage.getItem(TOKEN_KEY) || "";
    const saveToken = (t) => localStorage.setItem(TOKEN_KEY, t);
    const clearToken = () => localStorage.removeItem(TOKEN_KEY);

    const fetchUser = async () => {
        const token = getToken();
        if (!token) return null;

        const res = await fetch(`${API}/user`, {
            headers: {Authorization: `Bearer ${token}`},
        });

        if (!res.ok) throw new Error("Failed to fetch user");
        return res.json();
    };

    const signInWithToken = async (token) => {
        saveToken(token);
        const user = await fetchUser();
        setUser(user);
    };

    const refreshUser = async () => {
        const user = await fetchUser();
        setUser(user);
        return user;
    };

    const signOut = () => {
        clearToken();
        setUser(null);
    };

    // get user data
    useEffect(() => {
        let cancelled = false;

        const init = async () => {
            const token = getToken();

            if (!token) {
                setLoading(false);
                return;
            }

            try {
                const user = await fetchUser();

                if (!cancelled) setUser(user);

            } catch (e) {
                clearToken();

                if (!cancelled) setUser(null);
            } finally {
                if (!cancelled) setLoading(false);
            }
        };

        init();
        
        return () => {
            cancelled = true;
        };
    }, []);

    const value = useMemo(
        () => ({
            user,
            isLoggedIn,
            loading,
            signInWithToken,
            refreshUser,
            getToken,
            signOut,
        }),
        [user, isLoggedIn, loading]
    );

    return <PVContext.Provider value={value}>{children}</PVContext.Provider>;
};
