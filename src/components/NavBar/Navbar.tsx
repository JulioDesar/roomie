import React, { useContext } from "react";
import { AuthContext } from "../../contexts/Auth/AuthContext";
import "./Navbar.scss";

export default function Navbar() {
    const auth = useContext(AuthContext);
    return (
        <nav className="NavbarAdmin-container">
            <ul>
                <li>{auth.user?.nome}</li>
                <li>{auth.user?.funcao}</li>
                
            </ul>
        </nav>
    );
}