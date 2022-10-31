import React, { useState } from "react";
import MenuLateral from "../../components/Menu-lateral/MenuLateral";
import Navbar from "../../components/NavBar/Navbar";
import { BiUser } from "react-icons/bi";

import "./Admin.scss";
import { useNavigate } from "react-router-dom";
import Table from "../../components/Table/Table";

export default function Admin() {

	const navigate = useNavigate();
	const [buscar, setBuscar] = useState("");

	return (
		<main className="principal">
			<section className="menu">
				<MenuLateral />
			</section>

			<article className="navBar">
				<Navbar />
				<section className="inputAdmin">
					<label className="Modal-input-container">
						<input
							type="text"
							placeholder="Informe o CPF"
							value={buscar}
							onChange={((e) => setBuscar(e.target.value))}
							size={40}
							className="Modal-input"
						/>
					</label>
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
						<Table nome={buscar} />
					</div>
				</section>
			</article>
		</main>
	);
}
