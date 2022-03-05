var jwt = require('jsonwebtoken');

const TOKEN = process.env.APP_TOKEN ? process.env.APP_TOKEN : "TESTAPPTOKEN";

exports.sign = (value) => {
    return jwt.sign({
        expiresIn: Math.floor(Date.now() / 1000) + (60 * 60),
        data: value
    }, TOKEN);
}

exports.verify = (token) => {
    return jwt.verify(token, TOKEN);
}