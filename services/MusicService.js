const db = require("../models");
const MusicRepository = require("../repositories/MusicRepository");
const GlobalService = require("./GlobalService");
const {NotFound} = require("../helpers/CustomErrors");

const MusicService = {
    async index(page, artists, genres, albums, order) {
        if (!order) {
            order = "newest";
        }

        return await MusicRepository.findAllByArtistGenreAlbum(page, artists, genres, albums, order);
    },
    async show(id) {
        const music = await MusicRepository.findOneById(id);

        if (!music)
            throw new NotFound("Music not found");

        return music;
    },
    async create(name, link, year, lyric, image, artists, genres) {
        let music = await MusicRepository.create(name, link, year, lyric, image, artists, genres);

        await GlobalService.clearNewestFavorites();

        return music;
    },
    async update(id, name, link, year, lyric, image, artists, genres) {
        let music = await MusicRepository.update(id, name, link, year, lyric, image, artists, genres);

        await GlobalService.clearNewestFavorites();

        return music;
    },
    async delete(id) {
        let music = await MusicRepository.delete(id);

        await GlobalService.clearNewestFavorites();

        return music;
    }
}

module.exports = MusicService;