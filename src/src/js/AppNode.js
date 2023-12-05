const express = require('express');
const mysql = require('mysql2/promise');

const app = express();
const PORT = process.env.PORT || 3000;

// Configuração do banco de dados
const dbConfig = {
    host: 'localhost',
    user: 'seu_usuario',
    password: 'sua_senha',
    database: 'seu_banco_de_dados',
};

// Rota para criar tabelas no banco de dados
app.get('/setup', async (req, res) => {
    try {
        const connection = await mysql.createConnection(dbConfig);

        // Criação da tabela de jogos
        await connection.execute(`
      CREATE TABLE IF NOT EXISTS jogos (
        id INT AUTO_INCREMENT PRIMARY KEY,
        nome VARCHAR(255) NOT NULL
      )
    `);

        // Criação da tabela de usuários
        await connection.execute(`
      CREATE TABLE IF NOT EXISTS usuarios (
        id INT AUTO_INCREMENT PRIMARY KEY,
        nome VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL
      )
    `);

        connection.end();
        res.status(200).send('Tabelas criadas com sucesso!');
    } catch (error) {
        console.error(error);
        res.status(500).send('Erro ao criar tabelas.');
    }
});

// Rota para obter todos os jogos
app.get('/api/jogos', async (req, res) => {
    try {
        const connection = await mysql.createConnection(dbConfig);
        const [rows] = await connection.execute('SELECT * FROM jogos');
        connection.end();
        res.status(200).json(rows);
    } catch (error) {
        console.error(error);
        res.status(500).send('Erro ao obter jogos.');
    }
});

// Rota para obter todos os usuários
app.get('/api/usuarios', async (req, res) => {
    try {
        const connection = await mysql.createConnection(dbConfig);
        const [rows] = await connection.execute('SELECT * FROM usuarios');
        connection.end();
        res.status(200).json(rows);
    } catch (error) {
        console.error(error);
        res.status(500).send('Erro ao obter usuários.');
    }
});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
