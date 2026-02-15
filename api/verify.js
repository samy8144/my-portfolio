const jwt = require('jsonwebtoken');
const { connectDB, User } = require('../lib/db');

module.exports = async (req, res) => {
    // Enable CORS
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

    // Handle preflight
    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }

    if (req.method !== 'GET') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    try {
        // Get token from Authorization header
        const authHeader = req.headers.authorization;
        if (!authHeader || !authHeader.startsWith('Bearer ')) {
            return res.status(401).json({ error: 'No token provided' });
        }

        const token = authHeader.substring(7);

        // Verify token
        const decoded = jwt.verify(token, process.env.JWT_SECRET || 'default-secret-key-change-in-production');

        // Connect to database
        await connectDB();

        // Get user data
        const user = await User.findById(decoded.userId).select('-password');
        if (!user) {
            return res.status(401).json({ error: 'User not found' });
        }

        return res.status(200).json({
            success: true,
            user: {
                id: user._id,
                email: user.email,
                name: user.name
            }
        });

    } catch (error) {
        console.error('Verification error:', error);
        return res.status(401).json({ error: 'Invalid or expired token' });
    }
};
