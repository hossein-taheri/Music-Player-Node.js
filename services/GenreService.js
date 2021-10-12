const GenreRepository = require("../repositories/GenreRepository");


const GenreService = {
    async index(page) {
        return await GenreRepository.findAll(page);
    },
    async create(name, image) {
        return await GenreRepository.create(name, image);
    },
    async update(id, name, image) {
        return await GenreRepository.update(id, name, image);
    },
    async delete(id) {
        return await GenreRepository.delete(id);
    }
}

module.exports = GenreService;