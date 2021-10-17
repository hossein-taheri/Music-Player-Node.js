const ApiResponse = require("../helpers/responses/ApiResponse");
const AlbumService = require("../services/AlbumService");
const AlbumController = {
    async index(req, res, next) {
        try {
            const page = req.query.page || 1;

            const {
                albums,
                pageCount,
                musicsCount,
            } = await AlbumService.index(page);

            return ApiResponse
                .message(
                    req,
                    res,
                    null,
                    {
                        albums,
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
            const album = await AlbumService.create(
                req.body.name,
                req.body.image,
                req.body.year,
                req.body.musics,
            );

            return ApiResponse
                .message(
                    req,
                    res,
                    null,
                    {
                        album
                    }
                )
        } catch (err) {
            next(err);
        }
    },
    async show(req, res, next) {
        try {
            const album = await AlbumService.show(
                req.params.album
            );

            return ApiResponse
                .message(
                    req,
                    res,
                    null,
                    {
                        album
                    }
                )
        } catch (err) {
            next(err);
        }
    },
    async update(req, res, next) {
        try {
            const album = await AlbumService.update(
                req.params.album,
                req.body.name,
                req.body.image,
                req.body.year,
                req.body.musics,
            );

            return ApiResponse
                .message(
                    req,
                    res,
                    null,
                    {
                        album
                    }
                )
        } catch (err) {
            next(err);
        }
    },
    async delete(req, res, next) {
        try {
            const album = await AlbumService.delete(
                req.params.album
            );

            return ApiResponse
                .message(
                    req,
                    res,
                    null,
                    {
                        album
                    }
                )
        } catch (err) {
            next(err);
        }
    },
}

module.exports = AlbumController;