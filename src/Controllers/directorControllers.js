import express, { request, response } from "express";
import services from "../Services/directorServices";

const route = express.Router();

route.post("/", async (request,response) =>{


    const {name, nacionalidade, data_nasc,sexo} = request.body;

    await services.insertGender(gender);

    return response.status(201).send({"message": "Usuario cadastrado com sucesso!"})

})

export default route;

