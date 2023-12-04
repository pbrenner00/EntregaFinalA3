import React, {useState} from 'react';
import ImgProduto from "./img/battefiled.png";
import ImgProduto2 from "./img/gta3.jpg";
import ImgProduto3 from "./img/logo_fc.jpg";
import ImgProduto4 from "./img/red.jpg";
import ImgProduto5 from "./img/Farcry6.jpeg";
import ImgProduto6 from "./img/days gone.jpg";
import './App.css';
import Header from "./pages/Header";
import Avaliacao from "./components/Avaliacao";
import './css/style.css';
import './css/style2.css';
import Carrossel from "./pages/Carrossel";

import StarPreenchida from "./img/star.png";
import StarFilled from "./img/star-filled.png";
import StarOutline from "./img/star-outline.png";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import CadastroJogo from "./pages/cadastroJogo";



interface Jogo {
    nome: string;
    categoria: string;
    estrelas: number;
    desconto: number;
    valor: number;
    img: string; // Change the type to string
    // Add other properties as needed
}

const App: React.FC = () => {
    const [categoriaAtiva, setCategoriaAtiva] = useState<string>('todos');

    const filtrarPorCategoria = (categoria: string) => {
        setCategoriaAtiva(categoria);
    };

    const jogos: Jogo[] = [
        {nome: 'Battlefield 4™', categoria: 'jogando', estrelas: 3, desconto: 129.90, valor: 89.90, img: ImgProduto},
        {nome: 'GTA V', categoria: 'jogado', estrelas: 4, desconto: 199.90, valor: 159.90, img: ImgProduto2},
        {nome: 'EA Sports FC', categoria: 'nao_recomendo', estrelas: 2, desconto: 359.90, valor: 259.90, img: ImgProduto3},
        {nome: 'Battlefield 4™', categoria: 'jogando', estrelas: 3, desconto: 129.90, valor: 99.90, img: ImgProduto4},
        {nome: 'GTA V', categoria: 'jogado', estrelas: 4, desconto: 159.90, valor: 129.90, img: ImgProduto5},
        {nome: 'EA Sports FC', categoria: 'nao_recomendo', estrelas: 4, desconto: 199.90, valor: 159.90, img: ImgProduto6},
    ];

    // Verifica se a categoria ativa é 'todos' e exibe todos os jogos nesse caso
    const jogosFiltrados = categoriaAtiva === 'todos' ? jogos : jogos.filter(jogo => jogo.categoria === categoriaAtiva);

    return (
        <div>
            {/*<BrowserRouter>*/}
            {/*    <Routes>*/}
            {/*        <Route path="/" element={}/>*/}
            {/*    </Routes>*/}
            {/*</BrowserRouter>*/}
            <Header/>
            <Carrossel/>
            <br/>
            <div className="add-jogo">
                <a href="/cadastro_jogo">
                    <button className="btn orange text-center">Clique aqui e adicione seu Jogo</button>
                </a>
                <br/>
            </div>
            <br/>
            <main>
                <br/>
                <div className="container main">
                    <div className="categorias">
                        <p>Categorias </p>
                        <div className="menucategorias">
                            <button className="btn info" data-categoria="jogando" onClick={() => filtrarPorCategoria('jogando')}>
                                Jogando
                            </button>
                            <br/>
                            <button className="btn success" data-categoria="jogado" onClick={() => filtrarPorCategoria('jogado')}>
                                Jogado
                            </button>
                            <br/>
                            <button className="btn warning" data-categoria="zerados" onClick={() => filtrarPorCategoria('zerados')}>
                                Zerados
                            </button>
                            <br/>
                            <button
                                className="btn danger"
                                data-categoria="nao_recomendo"
                                onClick={() => filtrarPorCategoria('nao_recomendo')}
                            >
                                Não Recomendados
                            </button>
                            <br/>
                            <button className="btn default" data-categoria="todos" onClick={() => filtrarPorCategoria('todos')}>
                                Todos
                            </button>
                        </div>
                    </div>
                    <div className="produtos">
                        {jogosFiltrados.map((jogo, index) => (
                            <div key={index} className="cards">
                                <img src={jogo.img} className="card-imgs" alt=""/>
                                <div className="card-body">
                                    <h5 className="card-title">{jogo.nome}</h5>
                                </div>
                                <Avaliacao
                                    numEstrelas={jogo.estrelas}
                                    maxEstrelas={5} // Número total de estrelas
                                    filledSrc={StarFilled}
                                    outlineSrc={StarOutline}
                                    preenchidoSrc={StarPreenchida}
                                />
                                <div className="informacoes">
                                    <span className="desconto">R$ {jogo.desconto}</span>
                                    <span className="valor">R$ {jogo.valor}</span>
                                    <span className="dividir">em 1x no cartão de crédito</span>
                                </div>
                            </div>

                        ))}
                    </div>
                </div>
            </main>
            <br/>
            <footer id="footer">
                <div className="footer-top">
                    <div className="footer-column">
                        <h3>Valores</h3>
                        <p>Trabalho duro</p>
                        <p>Integridade</p>
                        <p>Inovação</p>
                    </div>
                    <div className="footer-column">
                        <h3>Ajuda</h3>
                        <p><a href="#">Central de Atendimento</a></p>
                        <p><a href="#">Tutoriais</a></p>
                        <p><a href="#">Blog</a></p>
                    </div>
                    <div className="footer-column">
                        <h3>Segurança</h3>
                        <p><a href="#">Política de Privacidade</a></p>
                        <p><a href="#">Política de Segurança</a></p>
                        <p><a href="#">Suporte à Vítimas de Cibercrime</a></p>
                    </div>
                    <div className="footer-column">
                        <h3>Redes Sociais</h3>
                        <p><a href="#">Facebook</a></p>
                        <p><a href="#">Twitter</a></p>
                        <p><a href="#">Instagram</a></p>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>© 2023 - Strong Games. Todos os direitos reservados.</p>
                </div>
            </footer>
        </div>
    );
};

export default App;
