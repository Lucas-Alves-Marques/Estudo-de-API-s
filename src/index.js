import express, { request, response } from 'express';

const server = express();

server.listen(3333, ()=>{

    console.log('Servidor Online 🐱‍👤')

})

server.get("/usuario", (request,response) =>{

    return response.status(200).send({"message": "Meu primeiro endpoint.😁"});

});

