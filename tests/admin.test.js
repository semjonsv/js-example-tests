const Admin = require('../entities/admin.js');

describe('Admin Test', () => {
  const admin = new Admin({
    'name': 'Jhon',
    'surname': 'Snow',
  })

  it('create admin', async () => {
    expect(admin).toBeInstanceOf(Admin);
  });

  it('admin greet', async () => {
    expect(admin.greet()).toEqual(
      'Greetings! My name is Jhon Snow!'
    );
  });
})
