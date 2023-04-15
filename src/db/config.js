import mysql from "mysql2";

const config = {
    host: '192.168.0.104',
    port: '3306',
    password: 'root',
    username:'root',
    database: 'basesystem'

}

export function getConnection() {
    let conn = mysql.createConnection(config)
    conn.connect()
    return conn;
}
