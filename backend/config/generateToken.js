const jwt = require('jsonwebtoken')

const generateToken = (id) => {
    return jwt.sign({ id }, 'ENV', {
        expiresIn: "30d",
    });
};

module.exports = generateToken;
