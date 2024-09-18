import e from "express";
import express, { request, response } from "express";

const route = express.Router();

route.get("/", (request,response) =>{

    return response.status(200).send({"message" : "Listagem de usuarios com sucesso!!"});

    });

route.post("/", (request,response) =>{

    const{name, email, password,typeUser} = request.body;

    // if(password.length < 6){

    //     return response.status(400).send({message : "A senha deve conter mais no minimo 6 caracteres"})
    // }

    if(typeUser != "admnistrador" && typeUser != "comum") {

        return response.status(400).send({message : "Tipo de usuario não conforme"})
    }

    else{

    console.log("Usuario cadastrado")

     }


})

export default route