/* eslint-disable react-hooks/exhaustive-deps */
import "./Table.scss";
import { BiUserX, BiUserCheck, BiEditAlt } from "react-icons/bi";
import { useEffect, useState, useContext } from "react";
import { AuthContext } from "../../contexts/Auth/AuthContext";
import { useApi } from "../../hooks/UseApi";
import { useNavigate } from "react-router-dom";

export default function Table(props) {

    const [users, setUsers] = useState([]);

    const api = useApi();
    const auth = useContext(AuthContext);
    const navigate = useNavigate();

    const setData = (data) => {
        console.log(data);
        localStorage.setItem("ID", data.id);
        localStorage.setItem("telefone", data.telefone);
        localStorage.setItem("ativo", data.ativo);
        localStorage.setItem("funcao", data.funcao)

        navigate("/atualizar");
    }

    const putData = async (props) => {
        if (auth.user.id !== props.id) {
            await api.atualizar(props.id, props.telefone, !props.ativo, props.funcao);
        } else {
            alert("Não é possivel alterar a propria permissão!!");
        }
    }

    async function getUsers() {
        await api.pegar(props.nome)
            .then((response) => {
                setUsers(response);
            });
    }

    useEffect(() => {
        getUsers();
    }, [getUsers]);
    return (
        <table className="table-container" cellPadding={0} cellSpacing={0}>
            <thead>
                <tr>
                    <th>Nome</th>
                    <th>Tipo</th>
                    <th>Status</th>
                    <th>Opções</th>
                </tr>
            </thead>
            <tbody>
                {users.map((user) => (

                    <tr key={user.id} >
                        <td>{user.nome}</td>

                        <td>{user.ativo ? "Ativo" : "Inativo"}</td>
                        <td>{user.funcao}</td>
                        <td>
                            <div className="table-opcoes">
                                <BiEditAlt
                                    size={25}
                                    style={{ cursor: "pointer" }}
                                    color="#006837"
                                    onClick={() => setData(user)}
                                />
                                <BiUserCheck
                                    size={25}
                                    style={user.ativo ? { cursor: "default" } : { cursor: "pointer" }}
                                    color={user.ativo ? "#707070" : "#68D391"}
                                    onClick={() => user.ativo ? null : putData(user)}
                                />
                                <BiUserX
                                    size={25}
                                    style={user.ativo ? { cursor: "pointer" } : { cursor: "default" }}
                                    color={user.ativo ? "#FC8181" : "#707070"}
                                    onClick={() => user.ativo ? putData(user) : null}
                                />
                            </div>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table >
    )
}