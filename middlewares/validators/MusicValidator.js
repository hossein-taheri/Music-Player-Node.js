const Joi = require("joi");
const Validate = require("./Validate");
const ApiResponse = require("../../helpers/responses/ApiResponse");
const MusicValidator = {
    index: (req, res, next) => {
        Validate(req,
            {},
            {},
            {
                page: Joi
                    .number()
                    .required()
                    .min(1),
                artists: Joi
                    .array()
                    .min(0)
                    .items(
                        Joi
                            .number()
                            .min(1)
                    ),
                genres: Joi
                    .array()
                    .min(0)
                    .items(
                        Joi
                            .number()
                            .min(1)
                    ),
                albums: Joi
                    .array()
                    .min(0)
                    .items(
                        Joi
                            .number()
                            .min(1)
                    ),
                order: Joi
                    .string()
                    .valid('newest', 'favorite'),
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
        Validate(req,
            {},
            {
                music: Joi
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
    create: (req, res, next) => {
        Validate(req,
            {
                name: Joi
                    .string()
                    .required()
                    .min(1)
                    .max(250),
                link: Joi
                    .string()
                    .required()
                    .min(1)
                    .max(250),
                lyric: Joi
                    .string()
                    .min(1),
                image: Joi
                    .string()
                    .min(3)
                    .max(250),
                year: Joi
                    .number()
                    .min(1800)
                    .max(2100),
                artists: Joi
                    .array()
                    .required()
                    .min(0)
                    .items(
                        Joi
                            .number()
                            .min(1)
                    ),
                genres: Joi
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
    update: (req, res, next) => {
        Validate(req,
            {
                name: Joi
                    .string()
                    .required()
                    .min(1)
                    .max(250),
                link: Joi
                    .string()
                    .required()
                    .min(1)
                    .max(250),
                lyric: Joi
                    .string()
                    .min(1),
                image: Joi
                    .string()
                    .min(3)
                    .max(250),
                year: Joi
                    .number()
                    .min(1800)
                    .max(2100),
                artists: Joi
                    .array()
                    .required()
                    .min(0)
                    .items(
                        Joi
                            .number()
                            .min(1)
                    ),
                genres: Joi
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
                music: Joi
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
                music: Joi
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
}
module.exports = MusicValidator;