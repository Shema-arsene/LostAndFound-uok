import mongoose from 'mongoose';
import config from '../config';

mongoose.set('strictQuery', false);

export default async () => {
  await mongoose
    .connect(config.MONGO_URI)
    .then(() => {
      console.log('Database Connected!');
    })
    .catch((err) => {
      console.log(err);
    });
};
