import React from "react";
import "./style.css";

export default function MenuLateral() {
    return (
        <section className="navBarLateral-Container">

            <img src="./logo.svg" alt="Logo da Roomie" />

            <ul className="navBarLateral-list">
                <li>Usuarios</li>
                <li>Imóveis</li>
            </ul>

            <span>
                Sair
            </span>
        </section>
    );
}
