const Joi = require("joi");
const Validate = require("./Validate");
const ApiResponse = require("../../helpers/responses/ApiResponse");
const ArtistValidator = {
    index: (req, res, next) => {
        Validate(req,
            {},
            {},
            {
                page: Joi
                    .number()
                    .required()
                    .min(1),
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
    create: (req, res, next) => {
        Validate(req,
            {
                name: Joi
                    .string()
                    .required()
                    .min(1)
                    .max(250),
                image: Joi
                    .string()
                    .min(3)
                    .max(250),
            },
            {},
            {})
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
    update: (req, res, next) => {
        Validate(req,
            {
                name: Joi
                    .string()
                    .required()
                    .min(1)
                    .max(250),
                image: Joi
                    .string()
                    .min(3)
                    .max(250),
            },
            {
                artist: Joi
                    .number()
                    .required()
                    .min(1),
            },
            {})
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
    delete: (req, res, next) => {
        Validate(req,
            {},
            {
                artist: Joi
                    .number()
                    .required()
                    .min(1),
            },
            {})
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
module.exports = ArtistValidator;