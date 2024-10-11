import mysql2 from "mysql2/promise"

import "dotenv/config"

const db = await mysql2.createConnection({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PWD,
    database: process.env.MYSQL_DB,
})

console.log("Conexão realizada !");

export default db;