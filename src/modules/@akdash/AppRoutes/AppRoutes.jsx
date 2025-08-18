import { Routes, Route } from "react-router-dom";
import {SignIn} from "../SingIn";
import {Home} from "../Home";
import {NotFound} from "../NotFound";


export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
}
