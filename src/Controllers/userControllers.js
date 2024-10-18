
import express, { request, response } from "express";
import services from "../Services/userServices.js";
import { Route } from "express";

const route = express.Router();


route.post("/", async (request,response) =>{

    const{name, email, password,typeUser} = request.body;

    if(password.length < 6){

        return response.status(400).send({message : "A senha deve conter mais no minimo 6 caracteres"})
    }

    if (email.includes("@") == false) {

        return response.status(400).send({message : "E-mail não conforme"})

    }

    if(typeUser.toLowerCase() != "admnistrador" && typeUser.toLowerCase() != "comum") {

        return response.status(400).send({message : "Tipo de usuario não conforme"})
    }

    await services.createUser(name,email,password,typeUser);

    return response.status(201).send({"message": "Usuario cadastrado com sucesso!"})


})

route.put('/:idUser',async (request,response) =>{

    const{name, email, password,typeUser} = request.body;
    const{idUser} = request.params;

    if(password.length < 6){

        return response.status(400).send({message : "A senha deve conter mais no minimo 6 caracteres"})
    }

    if (email.includes("@") == false) {

        return response.status(400).send({message : "E-mail não conforme"})

    }

    if(typeUser.toLowerCase() != "admnistrador" && typeUser.toLowerCase() != "comum") {

        return response.status(400).send({message : "Tipo de usuario não conforme"})
    }

    await services.updateUser(name,email,password,typeUser,idUser);
    return response.status(201).send({"message": "Usuario atualizado com sucesso!"})


});

route.get("/", async(request,response)=>{

        const user = await services.listUser();

        if(user.length < 1){

            return response.status(204).end()

        }

        return response.status(200).send({"message": user})



});

route.delete('/:idUser', async(request,response)=>{

    const {idUser} = request.params;

    await services.deleteUser(idUser);

    return response.status(200).send({'message': "Usuário excluido com sucesso"})


});

export default route;