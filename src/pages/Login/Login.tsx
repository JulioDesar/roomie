import React from "react";
import { LoginForm } from "../../components/Login-form/LoginForm";
import "./Login.scss";

export default function Login() {
	return (
		<section className="Login-Container">
			<LoginForm />
		</section>
	);
}