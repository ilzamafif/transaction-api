const db = require('../config/database');

const Customer = {
    getAll: async () => {
        return await db.query('SELECT * FROM customer');
    },
    getById: async (id) => {
        return await db.query('SELECT * FROM customer WHERE id = ?', [id]);
    },
};

module.exports = Customer;
