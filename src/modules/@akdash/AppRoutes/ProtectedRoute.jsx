import React from "react";
import { usePVContext } from "../context/PVContext";
import { Navigate } from "react-router-dom";


export default function ProtectedRoute({ children }) {
    const { isLoggedIn, loading} = usePVContext();

    if (!loading && !isLoggedIn) {
        return <Navigate to="/signin" replace />;
    }

    return children;
}

