import { Checkbox } from "@mui/material";
import React, { useEffect, useState } from "react";
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
        <main>
            <form className="Modal-cadastro-form">

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

                <label onClick={putData}>Confirmar</label>
                <button onClick={cancelar}>Cancelar</button>
            </form>
        </main>
    )
}