import "./style.css";
import { BiUserX, BiUserCheck, BiEditAlt } from "react-icons/bi";
import React, { ReactNode, useEffect } from "react";
import axios from "axios";

export default function Table() {
    interface IUsers {
        content: [
            [
                id: number,
                nome: string,
                funcao: string,
                ativo: boolean
            ]
        ]
    }
    const defaultUsers: IUsers[] = [];
    const [users, setUsers]: [IUsers[], (users: IUsers[]) => void] = React.useState(defaultUsers);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    async function getUsers() {
        await axios.get<IUsers[]>("http://localhost:5000/users/user", {
            headers: {
                "Authorization": `Bearer eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJBUEkgUm9vbWllIiwic3ViIjoiMSIsImlhdCI6MTY2NTYwODMxOSwiZXhwIjoxNjY1NjExOTE5fQ.HxQpJu6v2YkLiQh0Jswl5XaMUxxxZZaAREkViHV-yXM`
                //"Authorization": `Bearer ${localStorage.getItem("authToken")}`
            },
            timeout : 1
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
                {users.map((user) => (

                    <tr key={user.content[0][0]} >
                        <td>{user.content[0][1]}</td>

                        <td>{user.content[0][2]}</td>
                        <td>{user.content[0][3]}</td>
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
                ))}
            </tbody>
        </table >
    )
}