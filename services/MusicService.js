const db = require("../models");
const MusicRepository = require("../repositories/MusicRepository");

const MusicService = {
    async getNewest() {
        return await MusicRepository.getNewest();
    },
    async getFavorites() {
        return await MusicRepository.getFavorites();
    },
}

module.exports = MusicService;