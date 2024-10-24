import express, { request, response } from "express";
import services from "../Services/directorServices.js";

const route = express.Router();

route.post("/", async (request,response) =>{

    const {name, nationality, date_birth,sex} = request.body;

    const sex_dir = sex.toUpperCase();

    // const data_recebida = new Date (data_nasc);

    // if(isNaN(data_recebida) = true)
    // {

    //     return response.status(400).send({"message": "Data de Nascimento Invalida"})

    // }

    if(sex_dir !== "M" && sex_dir !== "F"){

        return response.status(400).send({"message": "Sexo invalido, informe 'M' para masculino e 'F' para Feminino"})
    }

    await services.insertDirector(name, nationality, date_birth,sex);

    return response.status(201).send({"message": "Diretor cadastrado com sucesso!"})

})

route.put("/:idDiretor", async (request,response)=>{

    const {name, nationality, date_birth,sex} = request.body;

    const {idDiretor} = request.params;

    const sex_dir = sex.toUpperCase();


    if(sex_dir !== "M" && sex_dir !== "F"){

        return response.status(400).send({"message": "Sexo invalido, informe 'M' para masculino e 'F' para Feminino"})
    }

    await services.updateDirector(name, nationality, date_birth,sex,idDiretor)

    return response.status(201).send({"message": "Diretor atualizado com sucesso!"})


})

route.get("/", async (request,response)=>{

    const director = await services.listDirector();

    if(director.length < 1){

        return response.status(204).end()

    }

    return response.status(200).send({"message": director})

})

route.delete("/:id_director", async (request,response)=>{

    const  {id_director} = request.params;

    await services.deleteDirector(id_director);

    return response.status(200).send({'message': "Diretor excluido com sucesso"})


})

export default route;

