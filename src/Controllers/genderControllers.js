import express, { request, response } from "express";
import services from "../Services/genderServices.js";
import { format } from "mysql2";

const route = express.Router();

route.post("/", async (request,response) =>{

    const {gender} = request.body;

    await services.insertGender(gender);

    return response.status(201).send({"message": "Genero adicionado com sucesso!"})

})

route.put("/:IdGender", async (request,response) =>{

    const {gender} = request.body;

    const {IdGender} = request.params;

    await services.updateGender(gender,IdGender);

    return response.status(201).send({"message": "Genero atualizado com sucesso!"})

})

route.get("/", async (request,response) => {

    const genders = await services.listGender();

        if(genders.length < 1){

            return response.status(204).end()

        }

        return response.status(200).send({"message": genders})

});

route.delete("/:IdGender", async (request,response)=>{

    const {IdGender} = request.params;

    await services.deleteGender(IdGender);

    return response.status(200).send({'message': "Genero excluido com sucesso"})



})



export default route;

