import express, { request, response } from "express";

const route = express.Router();

route.get("/adm", (request,response) =>{

    return response.status(200).send({"message" : "Listagem de usuarios com sucesso!!"});

});

export default route