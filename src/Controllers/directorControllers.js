import express, { request, response } from "express";
import services from "../Services/directorServices.js";

const route = express.Router();

route.post("/", async (request,response) =>{

    const {name, nacionalidade, data_nasc,sexo} = request.body;

    await services.insertDirector(name, nacionalidade, data_nasc,sexo);

    return response.status(201).send({"message": "Diretor cadastrado com sucesso!"})

})

export default route;

