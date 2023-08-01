const Joi = require('joi');

// Define the validation schema
const dataManipulateSchema = Joi.object()
    .options({
        stripUnknown: true,
    })
    .keys({
        arr: Joi.array().items(Joi.number()).required()
    })

module.exports = { dataManipulateSchema }