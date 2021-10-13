const MusicService = require("../services/MusicService");
const ApiResponse = require("../helpers/responses/ApiResponse");
const MusicController = {
    async index(req, res, next) {
        try {
            const musics = await MusicService.index(
                req.query.page,
                req.query.artists,
                req.query.genres,
                req.query.albums,
                req.query.order,
            )

            return ApiResponse
                .message(
                    req,
                    res,
                    null,
                    {
                        musics
                    }
                )
        } catch (err) {
            next(err);
        }
    },
    async show(req, res, next) {
        try {
            const music = await MusicService.show(
                req.params.music,
            )

            return ApiResponse
                .message(
                    req,
                    res,
                    null,
                    {
                        music
                    }
                )
        } catch (err) {
            next(err);
        }
    },
    async create(req, res, next) {
        try {
            const music = await MusicService.create(
                req.body.name,
                req.body.link,
                req.body.year,
                req.body.lyric,
                req.body.image,
                req.body.artists,
                req.body.genres
            )

            return ApiResponse
                .message(
                    req,
                    res,
                    null,
                    {
                        music
                    }
                )
        } catch (err) {
            next(err);
        }
    },
    async update(req, res, next) {
        try {
            const music = await MusicService.update(
                req.params.music,
                req.body.name,
                req.body.link,
                req.body.year,
                req.body.lyric,
                req.body.image,
                req.body.artists,
                req.body.genres
            )

            return ApiResponse
                .message(
                    req,
                    res,
                    null,
                    {
                        music
                    }
                )
        } catch (err) {
            next(err);
        }
    },
    async delete(req, res, next) {
        try {
            const music = await MusicService.delete(
                req.params.music
            )

            return ApiResponse
                .message(
                    req,
                    res,
                    null,
                    {
                        music
                    }
                )
        } catch (err) {
            next(err);
        }
    },
}

module.exports = MusicController;