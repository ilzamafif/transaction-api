const mysql = require('mysql2/promise');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'db',
    connectionLimit: 10,
});

module.exports = {
    query: async (sql, params) => {
        const [rows] = await pool.query(sql, params);
        return rows;
    },
};
