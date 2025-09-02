import React from "react";
import { usePVContext } from "../context/PVContext";
import { Navigate } from "react-router-dom";
import {Loader} from "../UI/index";


export default function ProtectedRoute({ children }) {
    const { isLoggedIn, loading} = usePVContext();

    if (loading) {
        return <Loader
            isActive={loading}
            color={'#AE9040'} />
    }

    if (!isLoggedIn) {
        return <Navigate to="/signin" replace />;
    }

    return children;
}

