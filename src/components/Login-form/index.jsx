import React from "react";
import Input from "../Input-form";
import "./style.css";

export function LoginForm() {
    return (
        <header>
            <img width={385} src="./logo.svg" alt="Roomie" />

            <span>E-mail:</span>
            <Input type="email" size="50" />

            <span>Senha:</span>
            <Input type="password" size="50" />
            <button type="submit" value="Submit">Enviar</button>
        </header>
    );
}

