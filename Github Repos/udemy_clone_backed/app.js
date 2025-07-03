// Import the required modules
const express = require('express');
const mongoose = require('mongoose');

// Create an instance of an Express application
const app = express();

// Define a port for the server to listen on
const PORT = 8000;

// Middleware to parse JSON requests
app.use(express.json());

// MongoDB connection string
const mongoURI = 'mongodb+srv://zain:n8fvmhudsxtHKhVC@cluster0.r1g32.mongodb.net/Udemy_clone?retryWrites=true&w=majority&appName=Cluster0';

// Connect to MongoDB
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Error connecting to MongoDB:', err));

// Define a Mongoose schema and model
const UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number
});

const User = mongoose.model('outlines', UserSchema);

// Define a route to insert data into MongoDB
app.post('/add-user', async (req, res) => {
    try {
        const { name, email, age } = req.body;

        // Create a new user document
        const newUser = new User({ name, email, age });

        // Save the user to the database
        await newUser.save();

        res.status(201).json({ message: 'User added successfully', user: newUser });
    } catch (error) {
        res.status(500).json({ message: 'Error adding user', error });
    }
});

// Define a basic route
app.get('/', (req, res) => {
    res.send('Welcome to the Node.js Backend!');
});

// Define an API route
app.get('/api', (req, res) => {
    res.json({ message: 'Hello from the API!' });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});