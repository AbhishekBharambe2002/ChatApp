const jwt = require('jsonwebtoken')

const generateToken = (id) => {
    return jwt.sign({ id }, 'Your OWn Token name', {
        expiresIn: "30d",
    });
};

module.exports = generateToken;
