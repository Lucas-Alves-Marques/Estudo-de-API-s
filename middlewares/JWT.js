import jwt, { decode } from 'jsonwebtoken';

function verifyJWT(req, res, next){

    const secret = env.SECRET;

    const authHeader  = req.headers.authorization;

    if(!authHeader) {

        return res.status(401).send({message : "Token não informado."});
    }

    const parts = authHeader.split(' ');

    if(parts.length !== 2) {

        return res.status(401).send({message: "Token Invalido"});
    }

    const [scheme, token] = parts;

    if(!/^Bearer$/i.test(scheme)){

        return res.status(401).send({message: "Token Invalido"});
    }

    jwt.verify(token,secret, (err, decoded) =>{

        if(err){

            return res.status(401).send({message: "Usuario não autenticado."})
        }



        req.infoUser = decoded.infoUser;

        return next();
    });

};

export {verifyJWT}