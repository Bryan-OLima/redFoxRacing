//React imports
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {type NavigateFunction } from "react-router-dom";
//Firebase imports
import { auth } from "../../../firebaseConfig.ts";
import { createUserWithEmailAndPassword, type Auth, updateProfile } from "firebase/auth";
//Alerts imports
import ErrorAlert from "../../components/alerts/ErrorAlert.tsx";
import { ErrorMessage, SuccessMessage } from "../../assets/Messages.tsx";
import SuccessAlert from "../../components/alerts/SuccessAlert.tsx";

import './style.css';


function CreateAccountPage() {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [isError, setIsError] = useState(false);
    const [password, setPassword] = useState('');
    const [userName, setUserName] = useState('');
    
    const navigate: NavigateFunction = useNavigate();

    const handleSubmit = () => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredentials) => {
                const user: any = userCredentials.user;
                console.log(user);

                const redirectTimer = setTimeout( () => {
                    navigate('/login');
                }, 3000);

                updateProfile(user, {
                    displayName: userName
                }).then(() => {
                    console.log(`Account succefull created on name of: ${userName}`);
                    
                    redirectTimer;
                    setIsError(false);
                    setMessage(SuccessMessage());
                });
            })
        .catch((err) => { 
            setIsError(true);
            return(
                setMessage(ErrorMessage(err))
            )
        });
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
                <h2>Criar conta de Piloto</h2>
                <p>Insira suas informações para criar acesso a telemetria</p>

                <div>
                    <div className="input-group">
                        <label>NOME</label>
                        <div className="input-wrapper">
                        <i className="icon-user"></i>
                        <input 
                            type="text" 
                            placeholder="Seu Nome"
                            value={userName} 
                            onChange={e => setUserName(e.target.value)} 
                            required
                        />
                        </div>
                    </div>

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
                </div>
                {message == ''? (<div></div>):(
                    <div>
                        {message && isError?(
                            <div className="msg">
                                <ErrorAlert 
                                    message={message}
                                />
                            </div>) : (
                            <div className="msg">
                                <SuccessAlert 
                                    message={message}
                                />
                            </div>
                            )}
                    </div>
                )}

            </main>           

        </div>
    )
}

export default CreateAccountPage

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