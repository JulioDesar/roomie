import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useApi } from "../../hooks/UseApi";
import "./style.css";

export default function AtualizarForm() {

    const navigate = useNavigate();
    const api = useApi();

    const [id, setID] = useState("");
    const [telefone, setTelefone] = useState("");
    const [ativo, setAtivo] = useState(false);
    const [funcao, setFuncao] = useState("");

    const putData = async () => {
        await api.atualizar(id, telefone, ativo, funcao)
            .then(
                navigate("/admin")
            );
    }

    const cancelar = () => {
        navigate("/admin");
    }

    useEffect(() => {
        setID(localStorage.getItem("ID"))
        setTelefone(localStorage.getItem("telefone"));
        setAtivo(localStorage.getItem("ativo"));
        setFuncao(localStorage.getItem("funcao"))
    }, []);

    return (
        <main className="atualizar">
            <form className="Modal-update-form">

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
                    <input
                        type="radio"
                        value={"APROVADOR"}
                        checked={funcao === "APROVADOR"}
                        onChange={(e) => setFuncao(e.target.value)}
                    /> APROVADOR
                </label>


                <button onClick={putData} className="update-button">Confirmar</button>
                <button onClick={cancelar} className="cancel-button">Cancelar</button>

            </form>
        </main>
    )
}