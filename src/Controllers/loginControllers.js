import express from "express";
import { generatePassword } from "../Helpers/loginActions";
import Services from "../Services/loginServices";

const Router = express.Router();

Router.post('/', async (req, res) => {

    const {email, password} = req.body;


    try{

        const user = await db.login(email,password);
        
        if(user.length > 0){

            res.status(200).send({message: 'Login efetuado com sucesso'});
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
        
        const user = await Services.checkEmail(email);

        if(user.length > 0 ){

            const newPassword = generatePassword();

            await Services.changePassword(email , newPassword);

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