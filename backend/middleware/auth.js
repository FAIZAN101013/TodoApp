const jwt = require('jsonwebtoken');

// This runs before every task route.
// It checks the "Authorization: Bearer <token>" header
// and figures out which user is making the request.
function auth(req, res, next) {
  const header = req.headers.authorization;

  if (!header || !header.startsWith('Bearer ')) {
    return res.status(401).json({message: 'No token, please log in'});
  }

  const token = header.split(' ')[1];

  try {
    // Verify the token was signed with our secret
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Save the user's id so the route handlers can use it
    req.userId = decoded.userId;

    next(); // token is valid, continue to the route
  } catch (error) {
    return res.status(401).json({message: 'Invalid token, please log in again'});
  }
}

module.exports = auth;
