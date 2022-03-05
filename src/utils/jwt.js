const jwt = require("jsonwebtoken");

const APP_TOKEN = process.env.APP_TOKEN ? process.env.APP_TOKEN : "TESTTOKEN";

exports.sign = (value) => {
    return jwt.sign({
        exp: Math.floor(Date.now() / 1000) + (60 * 60),
        data: value
    }, APP_TOKEN);
}

exports.verify = (tokenToVerify) => {
    return jwt.verify(tokenToVerify, APP_TOKEN);
}