const jwt = require('jsonwebtoken');

// Assuming you're using an environment variable for your JWT secret
const JWT_SECRET = process.env.JWT_SECRET || 'your_jwt_secret';

const authMiddleware = (req, res, next) => {
  const authHeader = req.headers['authorization'];

  if (!authHeader) {
    return res.status(401).json({ message: 'No token provided, authorization denied' });
  }

  const token = authHeader.split(' ')[1]; // Assuming the header is "Bearer <token>"

  if (!token) {
    return res.status(401).json({ message: 'Authorization token missing' });
  }

  try {
    // Verify the token
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded; // Save the decoded user information to request object
    next(); // Move on to the next middleware or route handler
  } catch (err) {
    return res.status(403).json({ message: 'Invalid token, authorization denied' });
  }
};

module.exports = authMiddleware;
