const request = require('supertest');
const app = require('./index'); 

describe('API test', () => {

    // Tests that JSON format is returned correctly
    test('get /api/data returns JSON', async () => {
        const response = await request(app).get('/api/data');
        expect(response.header['content-type']).toEqual(expect.stringContaining('application/json'));
    });

    // Tests that the array of data returned is not empty
    test('get /api/data returns array of data', async () => {
        const response = await request(app).get('/api/data');
        expect(response.status).toBe(200);
        expect(response.body.length).toBeGreaterThan(0); 
    });

    // Tests that returned data has date, daily return, and total return information
    test('get /api/data returns date, daily return, and total return', async () => {
        const response = await request(app).get('/api/data');
        expect(response.body[0]).toHaveProperty('DailyReturn');
        expect(response.body[0]).toHaveProperty('TotalReturn');
        expect(response.body[0]).toHaveProperty('ReferenceDate');
    });


});
