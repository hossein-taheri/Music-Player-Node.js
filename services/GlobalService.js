const MusicRepository = require("../repositories/MusicRepository");

const GlobalService = {
    async getNewest() {
        if (!global.newest) {
            global.newest =  await MusicRepository.getNewest();
        }
        return global.newest;
    },
    async getFavorites() {
        if (!global.favorites) {
            global.favorites = await MusicRepository.getFavorites();
        }
        return global.favorites;
    },
    async clearNewestFavorites() {
        global.newest = null;
        global.favorites = null;
    }
}

module.exports = GlobalService;