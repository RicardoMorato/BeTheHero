const req = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection');

describe('ONG', () => {
  beforeEach(async () => {
    await connection.migrate.rollback(); // This will undo previous migrations
    await connection.migrate.latest();
  });

  afterAll(async () => {
    await connection.destroy(); // This will interrupt connection with the data base
  });

  it('Should be able to create a new ONG.', async () => {
    const res = await req(app)
      .post('/ongs')
      .send({
        name: "Animais aumigos",
        email: "auau@teste.com",
        whatsapp: "8100000100",
        city: "Jaboatão dos Guararapes",
        uf: "PE"
      });

      expect(res.body).toHaveProperty('Message');
      expect(res.body.Message).toBe('Success!');
      expect(res.body).toHaveProperty('id');
      expect(res.body.id).toHaveLength(8);
  });
});
