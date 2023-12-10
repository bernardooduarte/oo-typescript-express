import express from 'express';
import { User } from './models/User';


const app = express();
const PORT = 3000;
const USERS : Array<User> = [];

app.use(express.json());

app.post('/Usuario', (req, res) => {
    let { username, password } = req.body;

    console.log(req.body);
    if(!username || !password) return res.status(400).send({ error: 'Usuário e senha são necessários!'});
    
    let user: User = {
        username: username,
        password: password
    };

    if(USERS.find( item => item.username === user.username)){
        return res.status(400).send({ error: 'Nome de usuário já está em uso!'});
    }

    USERS.push(user);
    return res.status(201).send(user);
});

app.put('/Usuario', (req, res) => {
    let { username, password } = req.body;

    let user: User | undefined = USERS.find( item => item.username === username);

    if(user){
        let newUser: User = {
            username: username,
            password: password
        };

        let index = USERS.findIndex( item => item.username === newUser.username);
        USERS[index] = newUser;
        return res.sendStatus(204);
    }});

    app.put('/Usuario', (req, res) => {
        let { username, password } = req.body;
    
        let user: User | undefined = USERS.find( item => item.username === username);
    
        if(user){
            let newUser: User = {
                username: username,
                password: password
            };
    
            let index = USERS.findIndex( item => item.username === newUser.username);
            USERS[index] = newUser;
            return res.sendStatus(204);
        }
    
        return res.sendStatus(400);
    });
    
    app.delete('/Usuario', (req, res) => {
        let { username } = req.body;
    
        let user: User | undefined = USERS.find( item => item.username === username);
    
        if(user){
            let index = USERS.findIndex( item => item.username === username);
            USERS.splice(index,1);
            return res.sendStatus(204);
        }
    
        return res.status(400).send('Usuário não existe!');
});

app.delete('/Usuario', (req, res) => {
    let { username, password } = req.body;

    console.log(req.body);
    if(!username || !password) return res.status(400).send({ error: 'Usuário e senha são necessários!'});

    let user: User = {
        username: username,
        password: password
    };

    if(USERS.find( item => item.username === user.username)){
        return res.status(400).send({ error: 'Nome de usuário já está em uso!'});
    }

    USERS.push(user);
    return res.status(201).send(user);

});

app.get('/Usuario', (req, res) => {
    return res.status(200).send(USERS);
});

app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
