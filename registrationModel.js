const mongoose = require('mongoose');

const registrationSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  // ...other registration fields...
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
}, { collection: 'registrations' }); // Ensure the collection name is different from 'users'

const Registration = mongoose.model('Registration', registrationSchema);

// Ensure collection is created
Registration.createCollection().then(() => {
  console.log('Registration collection is created!');
});

module.exports = Registration;
