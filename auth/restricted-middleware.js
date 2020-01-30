const jwt = require('jsonwebtoken');

const { jwtSecret } = require('../config/secret.js')

module.exports = (req, res, next) => {
  const token = req.headers.authorization;

  if(token) {
    jwt.verify(token, jwtSecret, (err, decodedToken) => {
      if(err) {
        // token not valid
        res.status(401).json({ you: 'have invalid token'})
      } else {
        next();
      }
    })
  } else {
    res.status(401).json({you: 'shall not pass'})
  }
}