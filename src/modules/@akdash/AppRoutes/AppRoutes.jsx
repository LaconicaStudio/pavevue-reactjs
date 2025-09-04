import { Routes, Route } from "react-router-dom";
import {NotFound} from "../NotFound";
import {Welcome} from "../Welcome";
import ProtectedRoute from "./ProtectedRoute";
import {Forgot, SignIn, SignUp} from "../Auth";
import {Dashboard} from "../Dashboard";
import {MyProperties} from "../MyProperties";



export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp/> } />
            <Route path="/forgot" element={<Forgot/> } />

            <Route path="/welcome" element={
                <ProtectedRoute>
                    <Welcome />
                </ProtectedRoute>
            } />

            <Route path="/dashboard" element={
                <ProtectedRoute>
                    <Dashboard />
                </ProtectedRoute>
            } />

            <Route path="my-properties" element={
                <ProtectedRoute>
                    <MyProperties />
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
