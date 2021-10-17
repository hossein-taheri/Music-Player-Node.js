const GenreRepository = require("../repositories/GenreRepository");


const GenreService = {
    async index() {
        return await GenreRepository.findAll();
    },
    async create(name, image) {
        return await GenreRepository.create(name, image);
    },
    async show(id) {
        return await GenreRepository.findOneById(id);
    },
    async update(id, name, image) {
        return await GenreRepository.update(id, name, image);
    },
    async delete(id) {
        return await GenreRepository.delete(id);
    }
}

module.exports = GenreService;