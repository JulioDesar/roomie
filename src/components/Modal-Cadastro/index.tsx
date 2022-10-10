import axios from "axios";
import React, { useState } from "react";
import {
    BiUser,
    BiEnvelope,
    BiEditAlt,
    BiPhone,
    BiMap,
    BiCalendarAlt,
    BiCheck,
} from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { useApi } from "../../hooks/UseApi";

export default function CadastroForm() {

    const navigate = useNavigate();
    const api = useApi();

    const [nome, setNome] = useState("");
    const [cpf, setCpf] = useState("");
    const [nascimento, setNascimento] = useState(Date());
    const [telefone, setTelefone] = useState("");
    const [funcao, setFuncao] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    const postData = async () => {
        api.cadastrar(nome, cpf, telefone, nascimento, funcao, email, senha)
            .then(() => {
                navigate("/admin");
            });
    }

    const cancelar = () => {
        navigate("/admin");
    }

    return (
        <main>
            <form className="Modal-cadastro-form">

                <input
                    type="text"
                    placeholder="nome"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                />

                <input
                    type="text"
                    placeholder="cpf"
                    value={cpf}
                    onChange={(e) => setCpf(e.target.value)}
                />

                <input
                    type="date"
                    value={nascimento}
                    onChange={(e) => setNascimento(e.target.value)}
                />

                <input
                    type="text"
                    placeholder="telefone"
                    value={telefone}
                    onChange={(e) => setTelefone(e.target.value)}
                />

                <input
                    type="radio"
                    value={"ADMINISTRADOR"}
                    checked={funcao === "ADMINISTRADOR"}
                    onChange={(e) => setFuncao(e.target.value)}
                /> ADMINISTRADOR

                <input
                    type="radio"
                    value={"APROVADOR"}
                    checked={funcao === "APROVADOR"}
                    onChange={(e) => setFuncao(e.target.value)}
                /> APROVADOR

                <input
                    type="email"
                    placeholder="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <input
                    type="password"
                    placeholder="senha"
                    value={senha}
                    onChange={(e) => setSenha(e.target.value)}
                />

                <label onClick={postData}>Confirmar</label>
                <button onClick={cancelar}>Cancelar</button>
            </form>
        </main>
    )
}