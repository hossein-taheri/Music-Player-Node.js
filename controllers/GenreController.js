const GenreService = require("../services/GenreService");
const ApiResponse = require("../helpers/responses/ApiResponse");
const GenreController = {
    async index(req, res, next) {
        try {
            const genres = await GenreService.index();

            return ApiResponse
                .message(
                    req,
                    res,
                    null,
                    {
                        genres
                    }
                )
        } catch (err) {
            next(err);
        }
    },
    async create(req, res, next) {
        try {
            const genre = await GenreService.create(
                req.body.name,
                req.body.image,
            );

            return ApiResponse
                .message(
                    req,
                    res,
                    null,
                    {
                        genre
                    }
                )

        } catch (err) {
            next(err);
        }
    },
    async show(req, res, next) {
        try {
            const genre = await GenreService.show(
                req.params.genre
            );

            return ApiResponse
                .message(
                    req,
                    res,
                    null,
                    {
                        genre
                    }
                )

        } catch (err) {
            next(err);
        }
    },
    async update(req, res, next) {
        try {
            const genre = await GenreService.update(
                req.params.genre,
                req.body.name,
                req.body.image,
            );

            return ApiResponse
                .message(
                    req,
                    res,
                    null,
                    {
                        genre
                    }
                )

        } catch (err) {
            next(err);
        }
    },
    async delete(req, res, next) {
        try {
            const genre = await GenreService.delete(
                req.params.genre
            );

            return ApiResponse
                .message(
                    req,
                    res,
                    null,
                    {
                        genre
                    }
                )


        } catch (err) {
            next(err);
        }
    },
}

module.exports = GenreController;