import dataBase from "../Repository/MySQL.js"

async function checkEmail(email) {

    const SQL = "SELECT * FROM  tbl_usuario WHERE email = ?";

    const conn = await  dataBase.connectBD();

    const [rows] = await conn.query(SQL,email);

    conn.end()

    return rows;
    
}

async function login(email, password) {

    const SQL = 'SELECT * FROM tbl_usuario WHERE email = ? AND senha = ?';

    const dadosUser = [email, password]

    const conn = await dataBase.connectBD();

    const [rows] = await conn.query(SQL,dadosUser);

    conn.end();

    return rows;
    
}

async function changePassword(email, newpassword) {

    const SQL = "update tbl_usuario SET email = ? WHERE senha = ?";

    const dataNewPass = [email, newpassword];

    const conn = await dataBase.connectBD();

    const [rows] = await conn.query(SQL,dataNewPass);

    conn.end()
    
}

export default {changePassword,checkEmail, login}