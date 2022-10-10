import React from "react";
import "./style.css";
import MenuLateral from "../../components/Menu-lateral";
import Navbar from "../../components/NavBar";
import Table from "../../components/Table";
import { BiUser } from "react-icons/bi";

import "./style.css";
import Input from "../../components/Input-form";
import { useNavigate } from "react-router-dom";

export default function Admin() {

	const navigate = useNavigate();

	return (
		<main>
			<section className="menu">
				<MenuLateral />
			</section>

			<article className="navBar">
				<Navbar />
				<section className="inputAdmin">
					<Input
						type="text"
						msg="Informe o CPF"
						size={40}
					/>
					<form className="button-modal" onClick={() => {
						navigate("/cadastrar")
					}
					}>
						<BiUser size={25} color="#1C4532" />+
						<label>Novo Usuario</label>
					</form>
				</section>
				<section className="AdminTable-Container">
					<div className="tabela">
						<Table />
					</div>
				</section>
			</article>
		</main>
	);
}
