const db = require('../config/database');

const Transaction = {
    create: async (transactionData) => {
        const result = await db.query(
            'INSERT INTO transaction (customer_id, menu, price, qty, payment, total, created_at) VALUES (?, ?, ?, ?, ?, ?, ?)',
            [
                transactionData.customer_id,
                transactionData.menu,
                transactionData.price,
                transactionData.qty,
                transactionData.payment,
                transactionData.total,
                transactionData.created_at,
            ]
        );

        const transaction = await Transaction.getById(result.insertId);
        return transaction;
    },

    getById: async (id) => {
        const results = await db.query('SELECT * FROM transaction WHERE id = ?', [id]);

        if (results.length === 0) {
            throw new Error(`Transaksi dengan ID ${id} tidak ditemukan`);
        }

        const transaction = results[0];
        return transaction;
    },

    findAndFilter: async (filters) => {
        let sql = 'SELECT * FROM transaction';

        const params = [];
        if (filters.menu) {
            sql += ' WHERE menu LIKE ?';
            params.push(`%${filters.menu}%`);
        }

        if (filters.price) {
            sql += params.length > 0 ? ' AND' : ' WHERE';
            sql += ' price = ?';
            params.push(filters.price);
        }

        if (filters.customer) {
            sql += ' ORDER BY (SELECT name FROM customer WHERE id = transaction.customer_id)';
        } else {
            sql += ' ORDER BY created_at DESC';
        }

        return await db.query(sql, params);
    },
};

module.exports = Transaction;
