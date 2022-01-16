import { Schema, model } from 'mongoose';

const userSchema = new Schema({
  email: {
    type: String,
    min: 6,
    max: 255,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    min: 6,
    max: 1024,
    unique: false,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    required: true,
  },
});

const User = model('user', userSchema);

export default User;
