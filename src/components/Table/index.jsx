import React from "react";
import "./style.css";
import { BiUserX, BiUserCheck, BiEditAlt } from "react-icons/bi";

export default function Table() {
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
                <tr>
                    <td>Julio Cesar Pereira Santos</td>
                    <td>Admin</td>
                    <td>Ativo</td>
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
                <tr>
                    <td>Julio Cesar Pereira Santos</td>
                    <td>Admin</td>
                    <td>Inativo</td>
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
                                color="#68D391"
                            />
                            <BiUserX
                                size={25}
                                style={{ cursor: "pointer" }}
                                color="#707070"
                            />
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
    )
}