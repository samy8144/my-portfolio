require('dotenv').config();
const express = require('express');

process.on('uncaughtException', (err) => {
    console.error('UNCAUGHT EXCEPTION:', err);
});
process.on('unhandledRejection', (reason, p) => {
    console.error('UNHANDLED REJECTION:', reason);
});
const cors = require('cors');
const path = require('path');
const { connectDB } = require('./lib/db');

// Import API handlers
const registerHandler = require('./api/register');
const loginHandler = require('./api/login');
const verifyHandler = require('./api/verify');

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
// app.use(cors()); // Disabled to avoid duplicate headers with API functions
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Request logging middleware
app.use((req, res, next) => {
    console.log(`${new Date().toISOString()} ${req.method} ${req.url}`);
    next();
});

// Memory Server for local development
const { MongoMemoryServer } = require('mongodb-memory-server');

async function startServer() {
    // Start in-memory MongoDB if configured for local
    if (!process.env.MONGODB_URI || process.env.MONGODB_URI.includes('localhost')) {
        try {
            console.log('Starting in-memory MongoDB...');
            const mongod = await MongoMemoryServer.create();
            const uri = mongod.getUri();
            process.env.MONGODB_URI = uri;
            console.log('In-memory MongoDB started at:', uri);
        } catch (err) {
            console.warn('Failed to start in-memory MongoDB, falling back to default URI:', err.message);
        }
    }

    // Database connection
    try {
        await connectDB();
        console.log('Connected to MongoDB');
    } catch (err) {
        console.error('MongoDB connection error:', err);
    }

    // API Routes
    app.post('/api/register', registerHandler);
    app.post('/api/login', loginHandler);
    app.get('/api/verify', verifyHandler);

    // Start server
    app.listen(PORT, () => {
        console.log(`Server running at http://localhost:${PORT}`);
    });
}

startServer();
