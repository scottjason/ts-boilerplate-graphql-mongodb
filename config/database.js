import mongoose from 'mongoose';

const generateUri = () => {
  const { DB_NAME, CLUSTER, DB_USERNAME, DB_PASSWORD } = process.env;
  return `mongodb+srv://${DB_USERNAME}:${DB_PASSWORD}${CLUSTER}.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`;
};

export const connectToMongo = cb => {
  mongoose.connect(generateUri(), {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  mongoose.connection.once('open', () => {
    console.log('Connected to MongoDB!');
    cb();
  });
  mongoose.connection.on('MongoDB error', error => {
    console.error(error);
  });
};
