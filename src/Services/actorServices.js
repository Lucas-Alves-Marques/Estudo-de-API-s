import dataBase from "../Repository/MySQL.js";

async function insertActor(name, sex, date_birth) {

    const sql = "INSERT INTO tbl_ator(nome_ator,sexo,dt_nascimento) VALUES(?,?,?)";

    const dateActor = [name,sex,date_birth];

    const connection = await dataBase.connectBD();

    await connection.query(sql, dateActor);

    connection.end();
    
}

async function uptadeActor(name, sex, date_birth,id_ator ) {

    const sql = "UPDATE tbl_ator SET nome_ator = ?, sexo =?, dt_nascimento = ? WHERE id_ator = ?";

    const dateActor = [name,sex,date_birth,id_ator];

    const connection = await dataBase.connectBD();

    await connection.query(sql, dateActor);

    connection.end();
    
}

async function listActor() {

    const sql = "SELECT * FROM tbl_ator WHERE deletado = 0";

    const connection = await dataBase.connectBD();

    const [rows] = await connection.query(sql);

    connection.end();

    return rows;
    
}

async function deleteActor(id_ator) {

    const sql = "UPDATE tbl_ator SET deletado = 1 WHERE id_ator = ?";

    const connection = await dataBase.connectBD();

    await connection.query(sql, id_ator);

    connection.end();
    
}

export default {insertActor,uptadeActor,listActor,deleteActor}