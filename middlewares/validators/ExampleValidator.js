const Joi = require("joi");
const Validate = require("./Validate");
const ApiResponse = require("../../helpers/responses/ApiResponse");
const ReserveValidator = {
    index: (req, res, next) => {
        Validate(req,
            {},
            {},
            {
                music: Joi
                    .date()
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
}
module.exports = ReserveValidator;