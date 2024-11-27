import express from "express";
import services from "../Services/loginServices.js";
import loginActios from '../Helpers/loginActions.js';

const Router = express.Router();

Router.post('/', async (req, res) => {

    const {email, password} = req.body;

    try{

         const user = await services.login(email,password)

        const {id_usuario, nome} = user[0]

        if(user.length > 0){

            const token = loginActios.generateToken(id_usuario,nome)

           return res.status(200).send({message: token});
        }

        else{
            res.status(401).send({message:'Login incorreto'});
        }
    }   

    catch(err){

        res.status(500).send({message: `Houve um erro no banco de dados. ${err}`})

    }
    
})

Router.post('/reset', async (req,res) => {
    
    const {email} = req.body;

    try{
        
        const user = await services.checkEmail(email);

        if(user.length > 0 ){

            const newPassword = loginActios();

            await services.changePassword(email , newPassword);

            res.status(200).send({message: `Nova senha: ${newPassword}`});
        }

        else{

            res.status(404).send({message: "Usuario não encotrado"});
        }
    }

    catch(err){

        res.status(500).send({message:`Houver um erro no banco de dados. ${err}`})
    }
});

export default Router;