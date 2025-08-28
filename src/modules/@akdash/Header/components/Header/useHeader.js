import {useEffect, useState} from "react";
import {usePVContext} from "../../../context/PVContext";

export const useHeader = props => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const openMenu = () => setIsMenuOpen(true);
    const closeMenu = () => setIsMenuOpen(false);
    const toggle    = () => setIsMenuOpen(v => !v);

    useEffect(() => {
        if (!isMenuOpen) return;
        const onKey = (e) => e.key === "Escape" && closeMenu();
        document.addEventListener("keydown", onKey);

        return () => document.removeEventListener("keydown", onKey);
    }, [isMenuOpen]);

    useEffect(() => {
        document.body.style.overflow = isMenuOpen ? "hidden" : "";
    }, [isMenuOpen]);

    return {
        isMenuOpen,
        openMenu,
        closeMenu,
        toggle
    }
}