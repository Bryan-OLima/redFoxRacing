// import {signInWithEmailAndPassword} from "firebase"
import {auth} from "../../firebaseConfig.ts";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import './style.css'
import { useNavigate, type NavigateFunction } from "react-router-dom";

function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
 
    const navigate: NavigateFunction = useNavigate();
    const handleSubmit = () => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredentials) => {
                console.log('user logado!', userCredentials);
                navigate('/');
            })
            .catch((err) => setErrorMessage(err));
    }
    return (
        <div className="login-container">
            <div className="background-glow"></div>
            <img src="../../../public/logo.png" alt="Red Fox Logo" className="logo-img" />
            <header className="logo-section">
                <h1>RED <span>FOX</span></h1>
                <p className="subtitle">ACESSO RESTRITO • APENAS PILOTOS</p>
            </header>

            <main className="login-card">
                <h2>Login de Piloto</h2>
                <p>Insira suas informações acessar a telemetria</p>

                <div>
                    <div className="input-group">
                        <label>EMAIL</label>
                        <div className="input-wrapper">
                        <i className="icon-user"></i>
                        <input 
                            type="text" 
                            placeholder="seuemail@email.com"
                            value={email} 
                            onChange={e => setEmail(e.target.value)} 
                            required
                        />
                        </div>
                    </div>

                    <div className="input-group">
                        <label>SENHA</label>
                            <div className="input-wrapper">
                            <i className="icon-lock"></i>
                            <input 
                                type="password" 
                                placeholder="••••••••" 
                                value={password} 
                                onChange={e => setPassword(e.target.value)} 
                                required
                            />
                        </div>
                    </div>
                    {email && password?( 
                        <button type="submit" onClick={handleSubmit} className="btn-login">
                            FAZER PARTE DO PADDOCK <span>→</span>
                        </button>
                        ): (
                            <button type="submit" className="btn-login-readonly">
                                CADÊ AS CREDÊNCIAIS?
                            </button>
                        )}
                    <div className="error-msg">
                         {errorMessage}
                    </div>
                </div>
               
            </main>
        </div>

    )
}

export default LoginPage

//login page
// nome do piloto: 
// senha : 
// createUserWithEmailAndPassword
// Não tem conta? clique aqui.

// create account
// nome do pilot:
// senha :
// signInWithEmailAndPassword 
// ja possui conta? clique aqui