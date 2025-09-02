import { Routes, Route } from "react-router-dom";
import {SignIn} from "../SignIn";
import {NotFound} from "../NotFound";
import {Welcome} from "../Welcome";
import ProtectedRoute from "./ProtectedRoute";
import {SignUp} from "../SignUp";


export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp/> } />

            <Route path="/welcome" element={
                <ProtectedRoute>
                    <Welcome />
                </ProtectedRoute>
            } />

            <Route path="*" element={
                <ProtectedRoute>
                    <NotFound />
                </ProtectedRoute>
            } />
        </Routes>
    );
}
