const db = require("../models");
const MusicRepository = require("../repositories/MusicRepository");
const {NotFound} = require("../helpers/CustomErrors");

const MusicService = {
    async getNewest() {
        return await MusicRepository.getNewest();
    },
    async getFavorites() {
        return await MusicRepository.getFavorites();
    },
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
        return await MusicRepository.create(name, link, year, lyric, image, artists, genres);
    },
    async update(id, name, link, year, lyric, image, artists, genres) {
        return await MusicRepository.update(id, name, link, year, lyric, image, artists, genres);
    },
    async delete(id) {
        return await MusicRepository.delete(id);
    }
}

module.exports = MusicService;