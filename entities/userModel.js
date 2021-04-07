const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  id: { type: Number, default: '' },
  name: { type: String, default: '' },
  surname: { type: String, default: '' },
  birthDate: { type: Date, default: '' }
});

mongoose.model('User', UserSchema);


