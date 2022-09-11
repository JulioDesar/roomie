import React from "react";
import Input from "../Input-form";
import "./style.css";

export function LoginForm() {
    return (
        <header>
            <img width={385} src="./logo.svg" alt="Roomie" />
            <Input />
        </header>
    );
}

