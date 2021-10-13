const AlbumRepository = require("../repositories/AlbumRepository");


const AlbumService = {
    async index(page) {
        return await AlbumRepository.findAll(page);
    },
    async create(name, image, year, musics) {
        return await AlbumRepository.create(name, image, year, musics);
    },
    async update(id, name, image, year, musics) {
        return await AlbumRepository.update(id, name, image, year, musics);
    },
    async delete(id) {
        return await AlbumRepository.delete(id);
    }
}

module.exports = AlbumService;