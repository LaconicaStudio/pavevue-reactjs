import React from "react";
import {Link, useNavigate} from "react-router-dom";
import {usePVContext} from "../../../context/PVContext.jsx";
import {useHeader} from "./useHeader.js";
import {UserImage} from "../../../User";


const Header = () => {
    const {isLoggedIn, signOut} = usePVContext();
    const navigate = useNavigate();

    const {
        isMenuOpen,
        openMenu,
        closeMenu,
        toggle
    } = useHeader();

    const handleSignOut = () => {
        signOut();
        closeMenu();
        navigate("/signin");
    };

    return (
        <header className={`flex justify-between items-center mb-6 py-7 px-6 ${isLoggedIn ? "bg-black" : ""}`}>
            <div>
                <img src="/images/logo.svg" alt="logo" width="180" height="41"/>
            </div>
            {isLoggedIn && (
                <div className="flex items-center">
                    <UserImage/>
                    <div className="w-8 h-5">
                        <button
                            type="button"
                            aria-label="Open menu"
                            aria-controls="mobileMenu"
                            aria-expanded={openMenu}
                            onClick={toggle}
                            className="relative z-50 inline-flex h-9 w-10 flex-col items-center justify-center gap-1.5"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
                                <path fill="#ffffff"
                                      d="M96 160C96 142.3 110.3 128 128 128L512 128C529.7 128 544 142.3 544 160C544 177.7 529.7 192 512 192L128 192C110.3 192 96 177.7 96 160zM96 320C96 302.3 110.3 288 128 288L512 288C529.7 288 544 302.3 544 320C544 337.7 529.7 352 512 352L128 352C110.3 352 96 337.7 96 320zM544 480C544 497.7 529.7 512 512 512L128 512C110.3 512 96 497.7 96 480C96 462.3 110.3 448 128 448L512 448C529.7 448 544 462.3 544 480z"/>
                            </svg>
                        </button>
                    </div>
                    <div
                        onClick={closeMenu}
                        className={`fixed inset-0 z-40 bg-black/60 transition-opacity ${isMenuOpen ? "opacity-100" : "pointer-events-none opacity-0"}`}
                    />
                    <nav id="mobileMenu"
                         aria-hidden={!isMenuOpen}
                         className={`fixed right-0 top-0 z-50 h-full w-80 bg-black text-white shadow-xl transition-transform duration-300
                                         ${isMenuOpen ? "translate-x-0" : "translate-x-full"}`}
                    >
                        <div className="flex items-center justify-between px-5 py-4 border-b border-white/10">
                            <span className="text-lg font-semibold">Menu</span>
                            <button
                                aria-label="Close menu"
                                aria-controls="mobileMenu"
                                aria-expanded={isMenuOpen}
                                onClick={closeMenu}
                                className="p-2"
                            >
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                                    <path d="M6 6l12 12M18 6L6 18" stroke="#fff" strokeWidth="2" strokeLinecap="round"/>
                                </svg>
                            </button>
                        </div>
                        <ul className="flex flex-col gap-2 p-5">
                            <li>
                                <Link to="/" onClick={closeMenu}
                                      className="block rounded px-3 py-2 hover:bg-white/10">Home</Link>
                            </li>
                            <li>
                                <button
                                    onClick={handleSignOut}
                                    className="block rounded px-3 py-2 hover:bg-white/10 text-left w-full"
                                >
                                    Sign Out
                                </button>
                            </li>
                        </ul>
                    </nav>
                </div>
            )}
        </header>
    )
}

export default Header;