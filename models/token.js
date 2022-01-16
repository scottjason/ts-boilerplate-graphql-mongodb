import { Schema, model } from 'mongoose';

const tokenSchema = new Schema({
  tags: [{ type: String }],
});

const Token = model('token', tokenSchema);

export default Token;
