import mongoose from 'mongoose';
const { Schema } = mongoose;

const userdata = new mongoose.Schema(
  {
    fname: {
      type: String,
      required: true,
    },
    lname: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: [true, 'Please provide a password!'],
      unique: false,
    },
    otp: {
      type: Number,
    },

    // hashedPass: {
    //   type: String,
    //   required: true,
    // },
  },
  { collection: 'signup' }
);

const User = mongoose.model('userData', userdata);
export default User;
