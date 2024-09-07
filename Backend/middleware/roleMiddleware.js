function roleMiddleware(requiredRole) {
    return (req, res, next) => {
      const { role } = req.user; // Assuming user role is set in authMiddleware
      if (role !== requiredRole) {
        return res.status(403).json({ message: 'Access denied' });
      }
      next();
    };
  }
  
  module.exports = roleMiddleware;
  