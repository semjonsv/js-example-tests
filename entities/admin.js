const User = require('./user.js');

class Admin extends User {
    greet = () => `Greetings! My name is ${this.fullName}!`;
}

module.exports = Admin;