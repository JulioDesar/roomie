import React from "react";
import "./style.css";
import { BiLogOut } from "react-icons/bi";


export default function MenuLateral() {

    const logout = <BiLogOut />

    return (
        <section className="navBarLateral-Container">
            <a href="/">
                <img src="./logo.svg" alt="Logo da Roomie" />
            </a>

            <ul className="navBarLateral-list">
                <a href="*">
                    <li>
                        Usuarios
                    </li>
                </a>
                <a href="*">
                    <li>
                        Imóveis
                    </li>
                </a>
            </ul>

            <a href="/" className="logout">
                {logout}
                <span>

                    Sair
                </span>
            </a>
        </section>
    );
}
