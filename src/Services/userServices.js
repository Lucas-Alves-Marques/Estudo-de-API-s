import dataBase from "../Repository/MySQL.js"


async function createUser(name, email, password, typeUser){
    const sql = "INSERT INTO tbl_usuario(nome, email, senha, tipo_usuario)  VALUES (?,?,?,?)";

    const infoUser = [name, email, password, typeUser];

    const connection = await dataBase.connectBD();

    await connection.query(sql, infoUser);

    connection.end();
}

async function updateUser(name, email, password, typeUser, iduser){

    const sql = "UPDATE tbl_usuario SET nome = ?, email = ?, senha = ?, tipo_usuario = ?  WHERE id_usuario = ?";

    const infoUser = [name, email, password, typeUser, iduser];

    const connection = await dataBase.connectBD();

    await connection.query(sql, infoUser);

    connection.end();
};

async function listUser(){

    const sql = "SELECT * FROM tbl_usuario WHERE deletado = 0";

    const conn = await dataBase.connectBD();

    const [rows] = await conn.query(sql);

    conn.end();
    
    return rows;


}

async function deleteUser(id_user){

    const sql = "UPDATE tbl_usuario SET deletado = 1 WHERE  id_usuario = ?";

    const connection = await dataBase.connectBD();

    await connection.query(sql, id_user);

    connection.end();

}

export default {createUser, updateUser, listUser, deleteUser};