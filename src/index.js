import express, { request, response } from 'express';

import routes from './routes.js';

const server = express();

server.use(express.json()) // o USE funcina para qualquer medoto HTTP: "POST- PUT - DELETE - GET - PACTH"

server.use("/",routes)

server.listen(3333, ()=>{

    console.log('Servidor Online 🐱‍👤')

});

