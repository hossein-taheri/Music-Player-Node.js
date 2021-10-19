const db = require("../models");
const {InternalServerErrors} = require("../helpers/CustomErrors");
const {NotFound} = require("../helpers/CustomErrors");

const GenreRepository = {
    async findAll() {
        return await db.Genre.findAll();
    },
    async create(name, image) {
        return await db.Genre.create({
            name,
            image
        })
    },
    async findOneById(id) {
        return await db.Genre.findOne({
            where: {
                id
            }
        })
    },
    async update(id, name, image) {
        const genre = await db.Genre.update({
            name,
            image
        }, {
            where: {
                id
            }
        });


        if (!genre[0])
            throw new InternalServerErrors("Something went wrong");

        return genre;
    },
    async delete(id) {
        const genre = await db.Genre.destroy({
            where: {
                id
            }
        });

        if (!genre)
            throw new InternalServerErrors("Something went wrong");

        return genre;
    }
}

module.exports = GenreRepository;