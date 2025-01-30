const connectToDatabase = require('./mongodb-connector');
const express = require('express');
const bodyParser = require('body-parser');
const registrationRoute = require('./routes/registration');

const app = express();

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/api', registrationRoute);

// Connect to MongoDB
connectToDatabase().then(db => {
  console.log('Connected to MongoDB');
  // You can now use the `db` object to interact with your MongoDB database
}).catch(err => {
  console.error('Failed to connect to MongoDB', err);
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

function validateUserData(userData) {
  const { username, email, password, confirmPassword } = userData;
  if (!username || !email || !password || !confirmPassword) {
    throw new Error('All fields are required');
  }
  if (password !== confirmPassword) {
    throw new Error('Passwords do not match');
  }
  // Add more validation as needed
}

async function registerUser(userData) {
  try {
    validateUserData(userData);
    const db = await connectToDatabase();
    const collectionName = 'users'; // Ensure the collection name is correct

    // Check if the collection exists, if not create it
    const collections = await db.listCollections({ name: collectionName }).toArray();
    if (collections.length === 0) {
      await db.createCollection(collectionName);
      console.log(`Collection '${collectionName}' created.`);
    }

    const collection = db.collection(collectionName);
    console.log('Inserting user data:', userData);
    const result = await collection.insertOne(userData);
    console.log('User registered successfully:', result);
    return result;
  } catch (error) {
    console.error('Error in registerUser function:', error);
    throw error;
  }
}

async function main() {
  const db = await connectToDatabase();
  // ...existing code...
  // You can now use the `db` object to interact with your MongoDB database
  // ...existing code...
}

main().catch(console.error);

module.exports = { registerUser };
