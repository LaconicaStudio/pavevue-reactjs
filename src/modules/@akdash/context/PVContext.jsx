// src/context/PVContext.jsx
import React, {createContext, useContext, useEffect, useMemo, useRef, useState} from "react";

// const API = '/api';
//const API = "http://localhost:3001";
const API = "https://pavevue.loc/api";

const PVContext = createContext(null);
export const usePVContext = () => useContext(PVContext);

export const PVContextProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const fetchUser = async () => {
        try {
            const res = await fetch(`${API}/users/info`, { credentials: "include" });

            if (res.status === 401) return null;

            if (!res.ok) {
                const text = await res.text().catch(() => "");
                throw new Error(`fetch /user failed: ${res.status} ${text}`);
            }

            return await res.json();
        } catch (err) {
            console.debug("[PV] fetchUser error:", err?.message);
            return null;
        }
    };

  const signIn = async (email, password) => {
    const res = await fetch(`${API}/users/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify({ email, password }),
    });

    if (!res.ok) {
      const err = await res.json().catch(() => ({}));
      throw new Error(err.message || "Login failed");
    }

    // get user
    const user = await fetchUser();
    setUser(user);
    return user;
  };


  const refreshUser = async () => {
    const user = await fetchUser();
    setUser(user);
    return user;
  };

  const signOut = async () => {
    await fetch(`${API}/signup`, { method: "POST", credentials: "include" }).catch(() => {});
    setUser(null);
  };

    useEffect(() => {
        let alive = true;

        (async () => {
            try {
                const user = await fetchUser();
                if (alive) setUser(user);
            } catch (e) {
                if (alive) setUser(null);
            } finally {
                if (alive) setLoading(false);
            }
        })();

        return () => { alive = false; };
    }, []);


    const isLoggedIn = !!user;

  const value = useMemo(() => ({
    user,
    isLoggedIn,
    loading,
    setLoading,
    signIn,
    refreshUser,
    signOut,
  }), [user, loading]);

    return <PVContext.Provider value={value}>{children}</PVContext.Provider>;
};
