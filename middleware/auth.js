const jwt = require('jsonwebtoken');
const config = require('config');

const Auth = (req, res, next) => {
  //Get the token form the header
  const token = req.header('x-auth-token');
  // Check if token exists or not

  if (!token) {
    return res.status(401).json({ msg: 'No Token, authorisation denied' });
  }

  //Verify token
  try {
    const decoded = jwt.verify(token, config.get('jwtSercret'));

    req.user = decoded.user;
    next();
  } catch (err) {
    return res.status(401).json({ msg: 'Token is not valid' });
  }
};

module.exports = Auth;
