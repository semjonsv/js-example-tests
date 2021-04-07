const moment = require('moment');

class User {
  constructor (data) {
    this.id = data.id,
    this.name = data.name,
    this.surname = data.surname,
    this.birthDate = data.birthDate
  }

  get fullName () {
    return `${this.name} ${this.surname}`
  }

  get age () {
    return moment().diff(this.birthDate, 'years')
  }
}

module.exports = User