import express, { request, response } from "express";
import services from "../Services/genderServices.js";
import { format } from "mysql2";

const route = express.Router();

route.post("/", async (request,response) =>{

    const {gender} = request.body;

    const generos = ["Ação", "Comédia", "Drama", "Ficção Científica", "Terror", "Romance", "Animação", "Documentário", "Suspense",      
                     "Fantasia", "Aventura", "Musical", "Faroeste", "Crime","ação", "comédia", "drama", "ficção científica", "terror",  
                     "romance", "animação", "documentário", "suspense", "fantasia", "aventura", "musical", "faroeste", "crime","acao",  
                     "comedia","ficcao cientifica", "animacao","documentario"];
        
        const valid = false;


        for(let cont = 0 ; cont > generos.length; cont++){

        if (gender == generos[cont]){

                await services.insertGender(gender);

                valid = true;

                return response.status(201).send({"message": "Genero cadastrado com sucesso!"})
            
            }
        };

        if(valid = false){

            return response.status(400).send({"message": "Genero não indentificado"})
        }

})

route.put("/:IdGender", async (request,response) =>{

    const {gender} = request.body;

    const {IdGender} = request.params;

    await services.updatetGender(gender,IdGender);

    return response.status(201).send({"message": "Genero atualizado com sucesso!"})

})



export default route;

