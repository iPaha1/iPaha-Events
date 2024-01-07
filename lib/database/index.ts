import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI;

export const connectToDatabase = async () => {
  if (!MONGODB_URI) throw new Error('MONGODB_URI is missing');

  const conn = await mongoose.connect(MONGODB_URI, {
    dbName: 'iPaha Events',
    bufferCommands: false,
  });

  console.log('Connected to MongoDB');
  
  return conn;
}