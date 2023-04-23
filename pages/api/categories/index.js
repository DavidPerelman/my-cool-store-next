import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI;
const options = {};

if (!process.env.MONGODB_URI) {
  throw new Error('Add Mongo URI to .env.local');
}

export default async function handler(req, res) {
  try {
    const mongoClient = await new MongoClient(uri, options).connect();
    console.log('Connected!');

    const db = mongoClient.db('myFirstDatabase');

    const collection = db.collection('categories');

    const results = await collection.find({}).toArray();

    res.status(200).json(results);
  } catch (error) {}
}
