import React from "react";
import LogoImg from "../img/logo.png";
import LogoTel from "../img/ico-tel.png";

function cadastroUser() {
    return (
        <body>
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
        <br/>
        <main>
            <div className="container">
                <div className="login-div">
                    <form id="cadastroForm" className="form-cadastro" action="" name="" method="post">
                        <div className="cadastroPage">
                            <div className="formCadastro">
                                <div className="bemVindo">
                                    Bem Vindo - Ambiente Restrito
                                </div>
                                <br/>
                                    <div className="inputsCadastro">
                                        <div className="divUsuario">
                                            <label className="pUsuario" htmlFor="inputUsuario">Usuario:</label>
                                            <input id="inputUsuario" type="text" name="usuario"/>
                                        </div>
                                        <div className="divEmail">
                                            <label className="pEmail" htmlFor="inputEmail">Email:</label>
                                            <input id="inputEmail" type="email" name="email"/>
                                        </div>
                                        <div className="divSenha">
                                            <label className="pSenha" htmlFor="inputSenha">Senha:</label>
                                            <input className="inputSenha" id="inputSenha" type="password" name="senha"/>
                                        </div>
                                        <div className="divConfirmarSenha">
                                            <label className="pConfirmarSenha" htmlFor="inputConfirmarSenha">Confirmar Senha:</label>
                                            <input className="inputConfirmarSenha" id="inputConfirmarSenha" type="password" name="senha"/>
                                        </div>
                                        <div className="inputButton">
                                            <input id="inputButton" type="submit" placeholder=""/>
                                        </div>
                                        <div className="cadastro">
                                            <div className="cadastro2">
                                                Já possui Conta?<a href="/login"> Clique Aqui</a>
                                            </div>
                                        </div>
                                    </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </main>
        <footer className="footer-login">
            <div className="copy">©2023 - Strong Games. Todos os direitos reservados</div>
        </footer>
        </body>

);
}

export default cadastroUser;