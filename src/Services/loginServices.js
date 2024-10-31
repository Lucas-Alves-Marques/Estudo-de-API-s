import dataBase from "../Repository/MySQL.js"

async function checkEmail(email) {

    const SQL = "SELECT * FROM  tbl_usuario WHERE emai = ?";

    const conn = await  dataBase.connectBD();

    const [rows] = await conn.query(SQL,email);

    conn.end()

    return rows;
    
}

async function changePassword(email, newpassword) {

    const SQL = "UPTADE tbl_usuario SET senha = ? WHERE email = ?";

    const dataNewPass = [email, newpassword];

    const conn = await dataBase.connectBD();

    const [rows] = await conn.query(SQL,dataNewPass);

    conn.end()
    
}

export default {changePassword,checkEmail}