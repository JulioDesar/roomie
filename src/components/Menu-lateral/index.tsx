import "./style.css";
import { BiLogOut } from "react-icons/bi";
import { useContext } from "react";
import { AuthContext } from "../../contexts/Auth/AuthContext";

export default function MenuLateral() {

    const logout = <BiLogOut />
    const auth = useContext(AuthContext);

    const handleLogout = async () => {
        auth.signout();
    }

    return (
        <section className="navBarLateral-Container">
            <a href="/">
                <img src="./logo.svg" alt="Logo da Roomie" />
            </a>

            <ul className="navBarLateral-list">
                <a href="*">
                    <li>
                        Usuarios
                    </li>
                </a>
                <a href="*">
                    <li>
                        Imóveis
                    </li>
                </a>
            </ul>

            <a href="/" className="logout" onClick={handleLogout}>
                {logout}
                <span>
                    Sair
                </span>
            </a>
        </section>
    );
}
