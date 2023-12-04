import React from "react";
import LogoImg from "../img/logo.png";
import LogoTel from "../img/ico-tel.png";
import LogoLogin from "../img/ico-login.png";

function Login() {

    return (
        <div>
            <header>
                <div className="logo">
                    <a href="/">
                        <img src={LogoImg} alt="logo"/>
                    </a>
                </div>
                <div className="icon-numero">
                    <div className="img-numero">
                        <img src={LogoTel} alt=""/>
                    </div>
                    <div className="texto-numero">
                        <span> 4002 - 8922</span>
                        <small>Somente horário Comercial</small>
                    </div>
                </div>
            </header>
            <section id="login">
                <div className="container">
                    <div className="login-div">
                        <form className="form-login" action="" name="" method="post">
                            <div className="loginPage">
                                <div className="formLogin">
                                    <div className="bemVindo">
                                        Bem Vindo - Ambiente Restrito
                                    </div>
                                    <div className="divUsuario">
                                        <label className="pUsuario" htmlFor="inputUsuario">Usuario:</label>
                                        <input id="inputUsuario" type="text" name="usuario"/>
                                    </div>
                                    <div className="divSenha">
                                        <label className="pSenha" htmlFor="inputSenha">Senha:</label>
                                        <input className="inputSenha" id="inputSenha" type="password" name="senha"/>
                                    </div>
                                    <div className="forgotPass">
                                        <a id="pPass" href="#">Esqueceu a senha?</a>
                                    </div>
                                    <div className="inputButton">
                                        <input id="inputButton" type="submit" placeholder="Entrar"/>
                                    </div>
                                    <div className="link-cadastro">
                                        <div className="link-cadastro2">
                                            Não possui cadastro?<a href="/cadastro_user"> Clique Aqui</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
            <footer className="footer-login">
                <div className="copy">©2023 - Strong Games. Todos os direitos reservados</div>
            </footer>
        </div>
    );

}

export default Login;