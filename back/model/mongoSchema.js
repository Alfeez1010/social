const mongoose = require('mongoose');

const userDataschema = new mongoose.Schema({
  fname: {
    type: String,
  },
  lname: {
    type: String,
  },
  password: {
    type: String,
  },
  email: {
    type: String,
  },

  password: {
    type: String,
    required: [true, 'Please provide a password!'],
    unique: false,
  },
});

const userData = mongoose.model('userData', userDataschema);
export default userData;
