var Joi = require('joi');

module.exports = {
    postNotes: {
        body: {
            title: Joi.string().max(255).required(),
            description: Joi.string().required()
        }
    },
    putNotes: {
        params: {
            id: Joi.number().integer().required()
        },
        body: {
            title: Joi.string().max(255).required(),
            description: Joi.string().required()
        }
    },
    deleteNotes: {
        params: {
            id: Joi.number().integer().required()
        }
    }
};