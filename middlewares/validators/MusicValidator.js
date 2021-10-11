const Joi = require("joi");
const Validate = require("./Validate");
const ApiResponse = require("../../helpers/responses/ApiResponse");
const MusicValidator = {
    index: (req, res, next) => {
        Validate(req,
            {},
            {},
            {
                music: Joi
                    .number()
                    .required()
                    .messages({}),
            })
            .then(req => {
                next()
            })
            .catch(err => {
                return ApiResponse
                    .JoiError(
                        req,
                        res,
                        err
                    )
            })
    },
    show: (req, res, next) => {

    },
    create: (req, res, next) => {

    },
    update: (req, res, next) => {

    },
    delete: (req, res, next) => {

    },
}
module.exports = MusicValidator;