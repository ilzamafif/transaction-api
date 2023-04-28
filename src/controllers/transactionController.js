const Transaction = require('../models/transaction');

const createTransaction = async (req, res) => {
    try {
        const { customer_id, menu, price, qty, payment, total } = req.body;

        if (!customer_id || !menu || !price || !qty || !payment || !total) {
            return res.status(400).send({ error: 'Harap lengkapi semua data transaksi' });
        }

        const created_at = new Date().toISOString().slice(0, 19).replace('T', ' ');
        const transaction = await Transaction.create({
            customer_id,
            menu,
            price,
            qty,
            payment,
            total,
            created_at
        });
        res.status(201).json({ transaction });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getTransactions = async (req, res) => {
    try {
        const { query } = req;
        const transactions = await Transaction.findAndFilter(query);
        res.json({ transactions });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = { createTransaction, getTransactions };

