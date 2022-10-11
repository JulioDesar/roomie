import "./style.css";
import { BiUserX, BiUserCheck, BiEditAlt } from "react-icons/bi";
import React, { useEffect } from "react";
import axios from "axios";

export default function Table() {
    interface IUsers {
        id: number;
        nome: string;
        cpf: string;
        funcao: string;
        nascimento: Date;
        telefone: string;
        ativo: boolean;
        email: string;
        password?: string;
    }
    const defaultUsers: IUsers[] = [];
    const [users, setUsers]: [IUsers[], (users: IUsers[]) => void] = React.useState(defaultUsers);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    async function getUsers() {
        await axios.get<IUsers[]>("http://localhost:5000/users/user", {
            headers: {
                "Authorization": `Bearer eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJBUEkgUm9vbWllIiwic3ViIjoiMSIsImlhdCI6MTY2NTQ0Njc1NywiZXhwIjoxNjY1NDUwMzU3fQ.9Qx5Z1ukzBB-B0c_vMjyvSwOZNOGs4NNFGxxPkSNXVE`
                //"Authorization": `Bearer ${localStorage.getItem("authToken")}`
            },
            //timeout : 1
        }).then((response) => {
            setUsers(response.data);
        })
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
                {Array.isArray(users) ? users.map((user) => (

                    <tr key={user.id} >
                        <td>{user.nome}</td>

                        <td>{user.funcao}</td>
                        <td>{user.ativo}</td>
                        <td>
                            <div className="table-opcoes">
                                <BiEditAlt
                                    size={25}
                                    style={{ cursor: "pointer" }}
                                    color="#006837"
                                />
                                <BiUserCheck
                                    size={25}
                                    style={{ cursor: "pointer" }}
                                    color="#707070"
                                />
                                <BiUserX
                                    size={25}
                                    style={{ cursor: "pointer" }}
                                    color="#FC8181"
                                />
                            </div>
                        </td>
                    </tr>
                )) : null}
            </tbody>
        </table >
    )
}