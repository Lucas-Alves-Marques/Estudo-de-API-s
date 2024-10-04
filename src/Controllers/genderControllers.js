import express, { request, response } from "express";
import services from "../Services/genderServices.js";
import { format } from "mysql2";
import { is } from "express/lib/request.js";

const route = express.Router();

route.post("/", async (request,response) =>{

    const {gender} = request.body;

        if (gender == generos[cont]){

        



        }

        await services.insertGender(gender);

        return response.status(201).send({"message": "Genero cadastrado com sucesso!"})



})

route.put("/:IdGender", async (request,response) =>{

    const {gender} = request.body;

    const {IdGender} = request.params;

    await services.updatetGender(gender,IdGender);

    return response.status(201).send({"message": "Genero atualizado com sucesso!"})

})



export default route;

