import mysql from "mysql2/promise";

const pool = mysql.createPool({
    host: "b4ryu0cw8foqui0wlgc7-mysql.services.clever-cloud.com",
    user: "uijvrgdmzk6sbsa3",
    password: "e4KsgRD6V0OmDDfgJlgw",
    database: "b4ryu0cw8foqui0wlgc7",
    waitForConnections: true,
    connectionLimit: 10,
});

export default pool;