const request = require('supertest');
const { app } = require('../index');

describe('API Endpoints', () => {
    describe('GET /', () => {
        test('должен возвращать приветственное сообщение', async () => {
            const response = await request(app)
                .get('/')
                .expect(200);
            
            expect(response.body).toHaveProperty('message');
            expect(response.body.message).toContain('Hello World');
        });
    });

    describe('GET /health', () => {
        test('должен возвращать статус здоровья', async () => {
            const response = await request(app)
                .get('/health')
                .expect(200);
            
            expect(response.body).toHaveProperty('status', 'OK');
            expect(response.body).toHaveProperty('timestamp');
            expect(new Date(response.body.timestamp)).toBeInstanceOf(Date);
        });
    });

    describe('GET /add/:a/:b', () => {
        test('должен складывать два числа', async () => {
            const response = await request(app)
                .get('/add/5/3')
                .expect(200);
            
            expect(response.body).toEqual({
                a: 5,
                b: 3,
                result: 8
            });
        });

        test('должен работать с отрицательными числами', async () => {
            const response = await request(app)
                .get('/add/-5/3')
                .expect(200);
            
            expect(response.body).toEqual({
                a: -5,
                b: 3,
                result: -2
            });
        });

        test('должен работать с дробными числами', async () => {
            const response = await request(app)
                .get('/add/2.5/1.5')
                .expect(200);
            
            expect(response.body.result).toBeCloseTo(4);
        });
    });

    describe('Несуществующие маршруты', () => {
        test('должен возвращать 404 для несуществующих маршрутов', async () => {
            await request(app)
                .get('/nonexistent')
                .expect(404);
        });
    });
});
