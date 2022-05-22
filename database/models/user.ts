import { Schema, model } from 'mongoose';

interface IUser {
  email: string;
  password: string;
}

const userSchema = new Schema<IUser>(
  {
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
  },
  { timestamps: true }
);

const User = model<IUser>('user', userSchema);

export default User;
