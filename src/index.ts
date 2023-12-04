import express from 'express';
import bodyParser from 'body-parser';

interface Usuario {
    usuario: string;
    senha: string;
}

let users: Usuario[] = [];

const app = express();
app.use(bodyParser.json());

app.post('/users', (req, res) => {
    const usuario: Usuario = {
        usuario: req.body.usuario,
        senha: req.body.senha,
    };

    users.push(usuario);
    res.status(201).json(usuario);
});

app.get('/users', (req, res) => {
    res.send(200).json(users);
});

app.listen(3000, () => {
    console.log(`O servidor está rodando na porta 3000`);
});