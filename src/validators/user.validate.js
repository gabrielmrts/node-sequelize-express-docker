const Joi = require("joi");

exports.validate = (body) => {
    const schema = Joi.object({
        name: Joi.string()
            .min(5)
            .max(100)
            .required(),
        
        email: Joi.string()
            .email()
            .max(255)
            .required(),
        
        password: Joi.string()
            .alphanum()
            .min(6)
            .required()
    });

    return schema.validate(body);
}
