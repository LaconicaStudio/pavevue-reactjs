import React from "react";
import { usePVContext } from "../context/PVContext";
import { Navigate } from "react-router-dom";


export default function ProtectedRoute({ children }) {
    const { isLoggedIn} = usePVContext();

    if (!isLoggedIn) {
        return <Navigate to="/signin" replace />;
    }

    return children;
}

