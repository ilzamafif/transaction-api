const request = require('supertest');
const app = require('../../src/app');
const db = require('../../src/config/database');

describe('Transactions API', () => {
    describe('GET /api/transactions', () => {
        it('should return an array of transactions', async () => {
            const response = await request(app).get('/api/transactions');
            expect(response.status).toBe(200);
            expect(Array.isArray(response.body.transactions)).toBe(true);
        });
    });

    describe('POST /api/transactions', () => {
        it('should create a new transaction', async () => {
            const transactionData = {
                customer_id: 1,
                menu: 'Nasi Goreng',
                price: 15000,
                qty: 2,
                payment: 'cash',
                total: 30000,
            };
            const response = await request(app)
                .post('/api/transactions')
                .send(transactionData);
            expect(response.status).toBe(201);
            expect(response.body.transaction).toMatchObject(transactionData);
        });
    });
});

