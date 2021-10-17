const ArtistRepository = require("../repositories/ArtistRepository");


const ArtistService = {
    async index(page) {
        return await ArtistRepository.findAll(page);
    },
    async create(name, image) {
        return await ArtistRepository.create(name, image);
    },
    async show(id) {
        return await ArtistRepository.findOneById(id);
    },
    async update(id, name, image) {
        return await ArtistRepository.update(id, name, image);
    },
    async delete(id) {
        return await ArtistRepository.delete(id);
    }
}

module.exports = ArtistService;