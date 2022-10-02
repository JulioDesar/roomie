import React, { useContext } from "react";
import { AuthContext } from "../../contexts/Auth/AuthContext";
import "./style.css";

export default function Navbar() {
    const auth = useContext(AuthContext);
    return (
        <nav className="NavbarAdmin-container">
            <div>{auth.user?.nome}</div>
            <ul>
                <li>User</li>
                
            </ul>
        </nav>
    );
}