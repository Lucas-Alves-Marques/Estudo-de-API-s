import dataBase from "../Repository/MySQL.js"


async function insertDirector(name, nationality, date_birth,sex){
    const sql = "INSERT INTO tbl_diretor(nome_diretor, nacionalidade, dt_nascimento, sexo)  VALUES (?,?,?,?)";

    const infoDirec = [name, nationality, date_birth,sex];

    const connection = await dataBase.connectBD();

    await connection.query(sql, infoDirec);

    connection.end();
}

async function updateDirector(name, nationality, date_birth,sex, id_director ){

    const sql = "UPDATE tbl_diretor SET nome_diretor = ?, nacionalidade = ?, dt_nascimento = ?, sexo = ? where id_diretor = ?";

    const infoDir = [name, nationality, date_birth,sex, id_director];

    const connection = await dataBase.connectBD();

    await connection.query(sql, infoDir);

    connection.end();
}

async function listDirector(params) {

const sql = "SELECT * FROM tbl_diretor WHERE deletado = 0";
const conn = await dataBase.connectBD();
const [rows] = await conn.query(sql);
conn.end();
return rows;
    
}

async function deleteDirector(id_director) {

    const sql = "UPDATE tbl_diretor SET deletado = 1 WHERE  id_diretor = ?";
    const conn = await dataBase.connectBD();
    
    await conn.query(sql,id_director)

    conn.end()
    
}

export default {insertDirector, updateDirector, listDirector, deleteDirector};