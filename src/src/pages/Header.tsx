import React from "react";
import LogoImg from "../img/logo.png";
import LogoTel from "../img/ico-tel.png";
import LogoLogin from "../img/ico-login.png";
import '../css/style.css';
import Login from "../pages/Login";


function Header() {
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
                <div className="login">
                    <div className="img-login">
                        <img src={LogoLogin} alt=""/>&nbsp;
                    </div>
                    <div className="texto-login">
                        <span>
                            <a href="/login" className="login-a" id="login">&nbsp;Login </a>
                            /
                        </span>
                    </div>
                    <div className="texto-cadastrar">
                        <span>
                            <a href="/cadastro_user" className="login-a">&nbsp;Cadastre-se</a>
                        </span>
                    </div>
                </div>
            </header>
        </div>
    );

}

export default Header;