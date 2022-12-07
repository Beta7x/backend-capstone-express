const jwt = require('jsonwebtoken');
require('dotenv').config({ path: './.env' });

const { SECRET_KEY } = process.env;

module.exports = {
  generateTokens: (data) => {
    const token = jwt.sign({ data }, SECRET_KEY, {
      expiresIn: '3h',
    });
    return token;
  },
  tokenVerification: (request, response, next) => {
    try {
      const token = request.header.authorization;
      const verified = jwt.verify(token.split(' ')[1], SECRET_KEY);
      if (verified) {
        next();
      } else {
        response.status(500).send('Token is invalid');
      }
    } catch (error) {
      response.status(500).send({ message: error.message });
      response.end();
    }
  },
};
