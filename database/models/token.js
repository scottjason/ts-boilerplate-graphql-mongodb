import { Schema, model } from 'mongoose';

const tokenSchema = new Schema({
  tags: [{ type: String }],
});

const Token = model('x-access-token', tokenSchema);

export default Token;
