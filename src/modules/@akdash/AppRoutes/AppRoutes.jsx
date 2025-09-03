import { Routes, Route } from "react-router-dom";
import {SignIn} from "../SignIn";
// import {Home} from "../Home";
import {NotFound} from "../NotFound";
import {Welcome} from "../Welcome";
import {SignUp} from "../SignUp";



export default function AppRoutes() {
    return (
        <Routes>
            {/*<Route path="/" element={<Home />} />*/}
            <Route path="/welcome" element={<Welcome />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
}
