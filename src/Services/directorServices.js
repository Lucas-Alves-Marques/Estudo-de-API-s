import dataBase from "../Repository/MySQL.js"


async function insertDirector(nome, nacionalidade, data_nasc, sexo){
    const sql = "INSERT INTO tbl_diretor(nome_diretor, nacionalidade, dt_nascimento, sexo)  VALUES (?,?,?,?)";

    const infoDirec = [nome, nacionalidade, data_nasc, sexo];

    const connection = await dataBase.connectBD();

    await connection.query(sql, infoDirec);

    connection.end();
}

async function updatetGender(nome_diretor, nacionalidade, dt_nascimento, sexo ){
    const sql = "UPDATE tbl_diretor SET nome_diretor = ?, nacionalidade = ?, dt_nascimento = ?, sexo = ? where id_diretor = ?";

    const infoDir = [nome_diretor, nacionalidade, dt_nascimento, sexo];

    const connection = await dataBase.connectBD();

    await connection.query(sql, infoDir);

    connection.end();
}

export default {insertDirector, updatetGender};