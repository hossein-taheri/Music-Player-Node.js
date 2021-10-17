const Joi = require("joi");
const Validate = require("./Validate");
const ApiResponse = require("../../helpers/responses/ApiResponse");
const AlbumValidator = {
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
                year: Joi
                    .number()
                    .min(1800)
                    .max(2100),
                musics: Joi
                    .array()
                    .required()
                    .min(0)
                    .items(
                        Joi
                            .number()
                            .min(1)
                    )
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
    show: (req, res, next) => {
        Validate(req,
            {},
            {
                album: Joi
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
                year: Joi
                    .number()
                    .min(1800)
                    .max(2100),
                musics: Joi
                    .array()
                    .required()
                    .min(0)
                    .items(
                        Joi
                            .number()
                            .min(1)
                    )
            },
            {
                album: Joi
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
                album: Joi
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
module.exports = AlbumValidator;