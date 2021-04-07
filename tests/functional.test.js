const mongoose = require('mongoose');
require('../entities/userModel');
const User = mongoose.model('User');
const supertest = require('supertest');
const app = require('../index');

describe('GET Endpoints', () => {
  it('GET /api/user/:userId', async () => {
    try {
        const user_id = 2;
        const user = await User.findOne({ id: user_id });
        const res = await supertest(app).get(`/user/${user_id}`);

        expect(res.statusCode).toEqual(200);
        expect(res).toHaveProperty('get');
        expect(JSON.stringify(res.body)).toBe(JSON.stringify({
            "id":user.id,
            "name":user.name,
            "surname":user.surname,
            "birthDate":user.birthDate
        }));
    } catch (err) {
        expect(err).toBe("Something went wrong!");
    }
  })
})