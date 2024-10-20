import Services from "../Services/actorServices.js";
import express,{request,response} from "express";

const route = express.Router();

route.post("/", async(request,response)=>{

    const {name,sex, date_birth} = request.body;

    const gender_ator = sex.toUpperCase();

    if(gender_ator !== "M" && gender_ator !== "F"){

        return response.status(400).send({"message": "Sexo invalido, informe 'M' para masculino e 'F' para Feminino"})
    }

    await Services.insertActor(name,sex, date_birth);

    return response.status(201).send({"message":"Ator cadastrado com sucesso"})



})

route.put("/:idActor", async (request,response) => {
    
    const {name,sex, date_birth} = request.body;

    const {idActor} = request.params;

    const gender_ator = sex.toUpperCase();

    if(gender_ator !== "M" && gender_ator !== "F"){

        return response.status(400).send({"message": "Sexo invalido, informe 'M' para masculino e 'F' para Feminino"})
    }

    await Services.uptadeActor(name,sex, date_birth,idActor);

    return response.status(201).send({"message":"Ator atualizado com sucesso"})

})

route.get("/",async (request,response) => {

    const actor = await Services.listActor();

    if(actor.length < 1){

        return response.status(204).end()

    }

    return response.status(200).send({"message": actor})
    
})

route.delete("/:idActor",async (request,response) => {
    
    const {idActor} = request.params;

    await Services.deleteActor(idActor);

    return response.status(200).send({"message":"Ator deletado com sucesso"})


})

export default route;
