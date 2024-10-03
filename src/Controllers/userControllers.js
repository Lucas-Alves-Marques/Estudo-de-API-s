
import express, { request, response } from "express";
import services from "../Services/userServices.js";

const route = express.Router();

// route.get("/", (request,response) =>{

//     return response.status(200).send({"message" : "Listagem de usuarios com sucesso!!"});

// });

route.post("/", async (request,response) =>{

    const{name, email, password,typeUser} = request.body;

    if(password.length < 6){

        return response.status(400).send({message : "A senha deve conter mais no minimo 6 caracteres"})
    }

    if(typeUser != "admnistrador" && typeUser != "comum") {

        return response.status(400).send({message : "Tipo de usuario não conforme"})
    }

    await services.createUser(name,email,password,typeUser);

    return response.status(201).send({"message": "Usuario cadastrado com sucesso!"})


})


route.put('/:idUser',async (request,response) =>{

    const{name, email, password,typeUser} = request.body;
    const{idUser} = request.params;

    await services.updateUser(name,email,password,typeUser,idUser);
    return response.status(201).send({"message": "Usuario atualizado com sucesso!"})


});

export default route;