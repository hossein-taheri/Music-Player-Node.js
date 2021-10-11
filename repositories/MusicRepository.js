const db = require("../models");

const MusicRepository = {
    async getNewest() {
        return await db.Music.findAll({
            limit: 12,
            order: [
                ['id', 'DESC']
            ]
        });
    },
    async getFavorites() {
        return await db.Music.findAll({
            limit: 12,
            order: [
                ['loadedCount', 'DESC']
            ]
        });
    },
}

module.exports = MusicRepository;