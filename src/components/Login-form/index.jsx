import React from "react";
import Input from "../Input-form";
import "./style.css";

export function LoginForm() {
    return (
        <header>
            <img width={400} src="./logo.svg" alt="Roomie" />

            <form action="">
                <span>Login</span>
                <Input type="email" size="75" />

                <span>Senha</span>
                <Input type="password" size="75" />
                <a href="*" id="forgot-password">Esqueci minha senha</a>
                <button type="submit" value="Submit" className="Login-button">Entrar</button>
            </form>

            <section>
                <img src="./google_svg.svg" alt="" />
                <img src="./instagram_svg.svg" alt="" />
            </section>
        </header>
    );
}

