const ArtistService = require("../services/ArtistService");
const ApiResponse = require("../helpers/responses/ApiResponse");
const ArtistController = {
    async index(req, res, next) {
        try {
            const page = req.query.page || 1;

            const {
                artists,
                pageCount,
                musicsCount,
            } = await ArtistService.index(page);

            return ApiResponse
                .message(
                    req,
                    res,
                    null,
                    {
                        artists,
                        musicsCount,
                        pageCount,
                        page: req.query.page,
                    }
                )
        } catch (err) {
            next(err);
        }
    },
    async create(req, res, next) {
        try {
            const artist = await ArtistService.create(
                req.body.name,
                req.body.image,
            );

            return ApiResponse
                .message(
                    req,
                    res,
                    null,
                    {
                        artist
                    }
                )

        } catch (err) {
            next(err);
        }
    },
    async show(req, res, next) {
        try {
            const artist = await ArtistService.show(
                req.params.artist
            );

            return ApiResponse
                .message(
                    req,
                    res,
                    null,
                    {
                        artist
                    }
                )

        } catch (err) {
            next(err);
        }
    },
    async update(req, res, next) {
        try {
            const artist = await ArtistService.update(
                req.params.artist,
                req.body.name,
                req.body.image,
            );

            return ApiResponse
                .message(
                    req,
                    res,
                    null,
                    {
                        artist
                    }
                )

        } catch (err) {
            next(err);
        }
    },
    async delete(req, res, next) {
        try {
            const artist = await ArtistService.delete(
                req.params.artist
            );

            return ApiResponse
                .message(
                    req,
                    res,
                    null,
                    {
                        artist
                    }
                )


        } catch (err) {
            next(err);
        }
    },
}

module.exports = ArtistController;