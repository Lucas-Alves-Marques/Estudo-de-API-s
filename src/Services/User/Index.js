import dataBase from "../../Repository/MySQL.js";

async function login(email, password) {

    const SQL = 'SELECT * FROM tbl_usuario WHERE email = ? AND senha = ?';

    const dadosUser = [email, password]

    const conn = await dataBase.connectBD();

    const [rows] = await conn.query(SQL,dadosUser);

    conn.end();

    return rows[0];
    
}

export default {login}