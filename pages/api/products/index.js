import connectToDatabase from '@/lib/connectToDatabase';

export default async function handler(req, res) {
  try {
    const { mongoClient } = await connectToDatabase();

    const db = mongoClient.db('myFirstDatabase');

    const collection = db.collection('products');

    const results = await collection.find({}).toArray();

    res.status(200).json(results);
  } catch (error) {
    console.error(error);
  }
}
