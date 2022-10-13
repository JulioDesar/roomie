import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useApi } from "../../hooks/UseApi";
import "./style.css";

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
        <main className="cadastrar">
            <form className="Modal-cadastro-form">
                <label className="Modal-input-container">
                    <input
                        type="text"
                        placeholder="nome"
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                        className="Modal-input"
                    />
                </label>
                <label className="Modal-input-container">
                    <input
                        type="text"
                        placeholder="cpf"
                        minLength={11}
                        maxLength={11} 
                        value={cpf}
                        onChange={(e) => setCpf(e.target.value.replace(/\D/g, ''))}
                        className="Modal-input"
                    />
                </label>
                <label className="Modal-input-container">
                    <input
                        type="date"
                        value={nascimento}
                        onChange={(e) => setNascimento(e.target.value)}
                        className="Modal-input"
                    />
                </label>
                <label className="Modal-input-container">
                    <input
                        type="text"
                        placeholder="telefone"
                        minLength={11}
                        maxLength={11} 
                        value={telefone}
                        onChange={(e) => setTelefone(e.target.value.replace(/\D/g, ''))}
                        className="Modal-input"
                    />
                </label>
                <label>
                    <input
                        type="radio"
                        value={"ADMINISTRADOR"}
                        checked={funcao === "ADMINISTRADOR"}
                        onChange={(e) => setFuncao(e.target.value)}
                    /> ADMINISTRADOR
                </label>
                <label>
                    <input
                        type="radio"
                        value={"APROVADOR"}
                        checked={funcao === "APROVADOR"}
                        onChange={(e) => setFuncao(e.target.value)}
                    /> APROVADOR
                </label>
                <label className="Modal-input-container">
                    <input
                        type="email"
                        placeholder="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="Modal-input"
                    />
                </label>
                <label className="Modal-input-container">
                    <input
                        type="password"
                        placeholder="senha"
                        minLength={6}
                        value={senha}
                        onChange={(e) => setSenha(e.target.value)}
                        className="Modal-input"
                    />
                </label>
                <button onClick={postData} className="create-button">Confirmar</button>
                <button onClick={cancelar} className="cancel-button">Cancelar</button>
            </form>
        </main>
    )
}