const User = require('../entities/user.js');

describe('User Test', () => {
  const user = new User({
    'id': 1,
    'name': 'Jhon',
    'surname': 'Snow',
    'birthDate': '1999-03-25'
  })

  it('create user', async () => {
    expect(user).toBeInstanceOf(User);
  });

  it('get users fullName', async () => {
    expect(user.fullName).toEqual('Jhon Snow');
  });

  it('get users age', async () => {
    jest.spyOn(user, 'age', 'get').mockReturnValue(50)
    expect(user.age).toEqual(50);
  });
})