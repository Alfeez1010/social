import mongoose from 'mongoose';

export const Connections = () => {
  const MONGODB_URI =
    'mongodb+srv://alfeez:alfeez@cluster1.nf0orrm.mongodb.net/?retryWrites=true&w=majority';
  mongoose.connect(MONGODB_URI, { useNewUrlParser: true });

  mongoose.connection.on('connected', () => {
    console.log('database connected');
  });
  mongoose.connection.on('disconnected', () => {
    console.log('database disconnected');
  });
};
export default Connections;
