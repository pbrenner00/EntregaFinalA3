import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from "react-router-dom";  // Substitua pelo caminho real do seu componente de login
import reportWebVitals from './reportWebVitals';
import './index.css';
import './css/style.css';
import './css/style2.css';
import App from './App';
import Login from './pages/Login';
import CadastroJogo from './pages/cadastroJogo';
import CadastroUser from './pages/cadastroUser';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <React.Fragment>
                    <Route path="/" element={<App/>}/>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/cadastro_user" element={<CadastroUser/>}/>
                    <Route path="/cadastro_jogo" element={<CadastroJogo/>}/>
                </React.Fragment>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
