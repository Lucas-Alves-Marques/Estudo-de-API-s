import dataBase from "../Repository/MySQL.js";


async function insertGender(gender){
    const sql = "INSERT INTO tbl_genero(genero)  VALUES (?)";

    const infoGen = [gender];

    const connection = await dataBase.connectBD();

    await connection.query(sql, gender);

    connection.end();
}

async function updateGender(gender, id_genero){
    const sql = "UPDATE tbl_genero SET genero = ? where id_genero = ?";

    const infoGen = [gender, id_genero];

    const connection = await dataBase.connectBD();

    await connection.query(sql, infoGen);

    connection.end();
}

async function listGender(){

    const sql = "SELECT * FROM tbl_genero WHERE deletado = 0";
    const conn = await dataBase.connectBD();
    const [rows] = await conn.query(sql);
    conn.end();
    return rows;
    
    
}

async function deleteGender(id_gender) {

    const sql = "UPDATE tbl_genero SET deletado = 1 WHERE  id_genero = ?";

    const conn = await dataBase.connectBD();

    await conn.query(sql,id_gender)

    conn.end();
}
    

export default {insertGender, updateGender, listGender, deleteGender};