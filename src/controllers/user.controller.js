const db = require("../models");
const User = db.users;
const validate = require("../validators/user.validate").validate;
const jwt = require("../utils/jwt");

exports.create = async (req, res) => {
    const user = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    }

    var validation = validate(user);

    if (validation.error) {
        return res.status(400).json({
            error: true,
            msg: validation.error.message
        });
    }

    await User.create(user);

    return res.status(201).json({
        error: false,
        msg: "User created with success"
    });
}

exports.delete = async (req, res) => {
    const id = req.params.id;

    await User.destroy({
        where: {
            id: id
        }
    });

    return res.status(204).send();
}

exports.list = async (req, res) => {
    var users = await User.findAll();

    res.send({
        error: false,
        msg: users
    });
}

exports.get = async (req, res) => {
    var id = req.params.id;

    var user = await User.findByPk(id);

    if (user.name) {
        return res.json({
            error: false,
            msg: {
                user: {
                    name: user.name,
                    email: user.email
                }
            }
        });
    }

    return res.status(404).json({
        error: true,
        msg: "User not found"
    });
}

exports.auth = async (req, res) => {
    const credentials = {
        email: req.body.email,
        password: req.body.password
    }

    var user = await User.findOne({
        where: credentials
    });

    if (user) {
        try {
            return res.json({
                error: false,
                msg: {
                    jwt: jwt.sign(credentials)
                }
            });
        } catch (error) {
            return res.status(400).json({
                error: true,
                msg: error.message
            });
        }
    } 

    return res.json({
        error: true,
        msg: "Invalid credentials"
    });
}