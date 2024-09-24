import dataBase from "../Repository/MySQL.js"


async function insertGender(gender){
    const sql = "INSERT INTO tbl_genero(genero)  VALUES (?)";

    const infoGen = gender;

    const connection = await dataBase.connectBD();

    await connection.query(sql, infoGen);

    connection.end();
}

export default {insertGender};