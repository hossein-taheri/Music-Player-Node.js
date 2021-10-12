const db = require("../models");
const {InternalServerErrors} = require("../helpers/CustomErrors");
const {NotFound} = require("../helpers/CustomErrors");
const GENRE_PER_PAGE = process.env.GENRE_PER_PAGE || 12;

const GenreRepository = {
    async findAll(page) {
        return await db.Genre.findAll({
            offset: (page - 1) * GENRE_PER_PAGE,
            limit: GENRE_PER_PAGE
        })
    },
    async create(name, image) {
        return await db.Genre.create({
            name,
            image
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