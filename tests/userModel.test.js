const mongoose = require('mongoose')
require('../entities/userModel')
const UserModel = mongoose.model('User')

describe('User Model Test', () => {
  const userData = {
    id: 2,
    name: 'Semjons',
    surname: 'Voronovs',
    birthDate: '2021-03-27'
  }

  beforeAll(async () => {
    await mongoose.connect('mongodb://localhost:27017/testproj', {
      useNewUrlParser: true,
      useCreateIndex: true
    }, (err) => {
      if (err) {
        console.error(err);
        process.exit(1);
      }
    })
  })

  afterAll(async() => {
    try {
      await mongoose.connection.close();
    } catch (error) {
      console.log(error);
    }
  })

  it('create user', async () => {
    const validUser = new UserModel(userData)
    const savedUser = await validUser.save()

    expect(savedUser._id).toBeDefined()
    expect(savedUser.name).toBe(userData.name)
    expect(savedUser.surname).toBe(userData.surname)
    expect(Date(savedUser.birthDate)).toBe(Date(userData.birthDate))
  })

  it('delete user by id', async () => {
    const savedUser = await UserModel.deleteOne({ id: 2 })

    expect(savedUser.n).toBe(1)
    expect(savedUser.ok).toBe(1)
    expect(savedUser.deletedCount).toBe(1)
  })
})
