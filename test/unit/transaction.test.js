
const Transaction = require('../../src/models/transaction');

describe('Transaction', () => {
    describe('create', () => {
        it('should create new transaction', async () => {
            const transactionData = {
                customer_id: 1,
                menu: 'Es Teh Manis',
                price: 5000,
                qty: 2,
                payment: 'cash',
                total: 10000,
                created_at: new Date(),
            };
            const transaction = await Transaction.create(transactionData);
            expect(transaction.customer_id).toBe(transactionData.customer_id);
            expect(transaction.menu).toBe(transactionData.menu);
            expect(transaction.price).toBe(transactionData.price);
            expect(transaction.qty).toBe(transactionData.qty);
            expect(transaction.payment).toBe(transactionData.payment);
            expect(transaction.total).toBe(transactionData.total);
        });

        it('should throw an error when required fields are missing', async () => {
            const transactionData = {
                customer_id: 1,
                menu: 'Es Teh Manis',
                price: 5000,
                qty: 2,
                payment: 'cash',
            };

            await expect(Transaction.create(transactionData)).rejects.toThrow(
                "Column 'total' cannot be null"
            );
        });
    });

    describe('getById', () => {
        it('should get transaction by ID', async () => {
            const transaction = await Transaction.getById(1);
            expect(transaction.id).toBe(1);
        });

        it('should throw an error when transaction is not found', async () => {
            await expect(Transaction.getById(999)).rejects.toThrow(
                'Transaksi dengan ID 999 tidak ditemukan'
            );
        });
    });

    describe('findAndFilter', () => {
        it('should return transactions based on filters', async () => {
            const filters = {
                menu: 'Es Teh Manis',
                price: 5000,
                customer: true,
            };
            const transactions = await Transaction.findAndFilter(filters);
            expect(transactions[0].menu).toBe(filters.menu);
            expect(transactions[0].price).toBe(filters.price);
        });

        it('should return all transactions when no filters are provided', async () => {
            const transactions = await Transaction.findAndFilter({});
            expect(transactions.length).toBeGreaterThan(0);
        });
    });
});
