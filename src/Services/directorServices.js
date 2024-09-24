import dataBase from "../Repository/MySQL.js"


async function insertDirector(nome, nacionalidade, data_nasc, sexo){
    const sql = "INSERT INTO tbl_diretor(nome_diretor, nacionalidade, dt_nascimento, sexo)  VALUES (?,?,?,?)";

    const infoDirec = [nome, nacionalidade, data_nasc, sexo];

    const connection = await dataBase.connectBD();

    await connection.query(sql, infoDirec);

    connection.end();
}

export default {insertDirector};