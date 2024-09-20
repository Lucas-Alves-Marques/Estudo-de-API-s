import dataBase from "../Repository/MySQL.js"


async function createUser(name, email, password, typeUser){
    const sql = "INSERT INTO tbl_usuario(nome, email, senha, tipo_usuario)  VALUES (?,?,?,?)";

    const infoUser = [name, email, password, typeUser];

    const connection = await dataBase.connectBD();

    await connection.query(sql, infoUser);

    connection.end();
}

export default {createUser};