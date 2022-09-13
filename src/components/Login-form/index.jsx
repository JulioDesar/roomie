import React from "react";
import Input from "../Input-form";
import "./style.css";

export function LoginForm() {
    return (
        <header>
            <img width={400} src="./logo.svg" alt="Roomie" />

            <form>
                <span>Login</span>
                <Input type="email" size="70" />

                <span>Senha</span>
                <Input type="password" size="70" />
                <div><a href="*">Esqueci minha senha</a></div>
                <button type="submit" value="Submit" className="Login-button">Entrar</button>
            </form>

            <section>
                <img src="./google_svg.svg" alt="Google" />
                <img src="./instagram_svg.svg" alt="Instagram" />
            </section>
        </header>
    );
}

