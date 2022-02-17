const request = require("supertest");
const app = require('../app');
const db = require('../models');
const appRequest = request(app);

const getUserData = ()=>({
  firstName: 'Test1',
  lastName: 'Test2',
  email: `test${Date.now()}@gmail.com`,
  password:'test123456',
  birthday:'1999-10-10',
  isMale:true
})
const user = getUserData();

afterAll(()=>{
  return db.sequelize.close();
});

describe('create user', () => {
  test('user create(post) successfully expect 201', async ()=>{
    const response = await appRequest.post('/api/users').send(user);
    expect(response.statusCode).toBe(201);
  });
});
