import React from "react";
import LogoImg from "../img/logo.png";
import LogoTel from "../img/ico-tel.png";
import '../css/style.css';
import '../css/style2.css';

function cadastroJogo() {
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
                <div className="cadastro-jogo">
                    <form action="/add-game" method="post">
                        <div className="formCadastroJogo">
                            <div className="divcadastroJogo">
                                <div className="tituloCadastroJogo">
                                    <span>Cadastre seu Jogo</span>
                                </div>
                                <br/>
                                font-size
                                <div className="divJogo">
                                    <div className="informacoesJogo">
                                        <label htmlFor="inputTitulo" className="labelTitulo">Titulo do Jogo:</label>
                                        <input id="inputTitulo" className="inputTitulo" type="text" name="title"/>
                                    </div>
                                </div>
                                <div className="divJogo">
                                    <div className="informacoesJogo">
                                        <label htmlFor="inputTitulo" className="labelTitulo">Gênero:</label>
                                        <input type="text" className="inputTitulo" name="genre"/>
                                    </div>
                                </div>
                                <div className="divPlataforma">
                                    <div className="informacoesPlataforma">
                                        <label htmlFor="inputTitulo" className="labelTitulo"> Selecione a Plataforma:</label>
                                        <select name="selectedFruit" className="optPlataforma">
                                            <option value="steam">Steam</option>
                                            <option value="epic_games">Epic Games</option>
                                            <option value="xbox_microsoft">Xbox - Microsoft</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="inputButton">
                                    <input id="inputButton" type="submit" value="Adicionar"/>
                                </div>

                            </div>

                        </div>
                    </form>
                </div>
            </div>
        </main>
        <br/>
        <footer className="footer-login">
            <div className="copy">©2023 - Strong Games. Todos os direitos reservados</div>
        </footer>
        </body>

    );

}

export default cadastroJogo;