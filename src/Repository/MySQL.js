import mysql from 'mysql2/promise';

async function connectBD() {

    return await mysql.createConnection({

        'password': "Lu24Ca$dev",
        'host': "localhost",
        'user': 'root',
        'port': 3306,
        'database':"cinetec2024"
    });

};

export default {connectBD};