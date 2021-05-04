const { getUsers } = require('../07-async-await');

describe('Topic - Async / Await', () => {
  it('should return 10 users', async () => {
    const users = await getUsers();
    expect(users.length).toEqual(10);
  });
});
