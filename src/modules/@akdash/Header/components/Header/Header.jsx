import React from "react";
import {Link} from "react-router-dom";

const SingIn = () => {
    return (
        <header className="flex justify-between items-center mb-6">
            <div>
                <img src="/images/logo.svg" alt="logo"/>
            </div>
            <nav className="flex gap-3">
                <Link to="/">Home</Link>
                <Link to="/signin">Sign In</Link>
            </nav>
        </header>
    )
}

export default SingIn;