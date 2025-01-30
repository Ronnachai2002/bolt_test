const { MongoClient } = require('mongodb');

const uri = 'mongodb+srv://ronnachaibu64:FoMJCdCF9LVUKdO7@test.mw2sv.mongodb.net/?retryWrites=true&w=majority&appName=test';
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function connectToDatabase() {
  try {
    await client.connect();
    console.log('Connected to MongoDB');
    const db = client.db('data'); // Ensure the database name is correct
    return db;
  } catch (error) {
    console.error('Error connecting to MongoDB:', error.message);
    throw error;
  }
}

module.exports = connectToDatabase;
