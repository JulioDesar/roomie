import { ChangeEvent, useContext, useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from '../../contexts/Auth/AuthContext';
import "./style.css";

export function LoginForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const auth = useContext(AuthContext);
    const navigate = useNavigate();

    const handleEmailInput = (event: ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    }

    const handlePasswordInput = (event: ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    }

    const handleLogin = async () => {
        if (email && password) {
            const isLogged = await auth.signin(email, password);
            if (isLogged) {
                navigate("/admin");
            }
        }
    }

    return (
        <header>
            <img width={400} src="./logo.svg" alt="Roomie" />

            <form>
                <span>Login</span>
                <input
                    type="email"
                    value={email}
                    onChange={handleEmailInput}
                    size={70}
                />

                <span>Senha</span>
                <input
                    type="password"
                    value={password}
                    onChange={handlePasswordInput}
                    size={70}
                />

                <div><a href="*">Esqueci minha senha</a></div>
                <Link to="/admin">
                    <button
                        onClick={handleLogin}
                        className="Login-button">
                        Entrar
                    </button>
                </Link>
            </form>
        </header>
    );
}

