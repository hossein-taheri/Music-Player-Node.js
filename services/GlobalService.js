const MusicService = require("./MusicService");

const GlobalService = {
    async getNewest() {
        if (!global.newest) {
            global.newest = await MusicService.getNewest();
        }
        return global.newest;
    },
    async getFavorites() {
        if (!global.favorites) {
            global.favorites = await MusicService.getFavorites();
        }
        return global.favorites;
    },
}

module.exports = GlobalService;