const db = require("../models");
const {InternalServerErrors} = require("../helpers/CustomErrors");
const ARTIST_PER_PAGE = process.env.GENRE_PER_PAGE || 12;

const ArtistRepository = {
    async findAll(page) {
        return await db.Artist.findAll({
            offset: (page - 1) * ARTIST_PER_PAGE,
            limit: ARTIST_PER_PAGE
        })
    },
    async create(name, image) {
        return await db.Artist.create({
            name,
            image
        })
    },
    async update(id, name, image) {
        const artist = await db.Artist.update({
            name,
            image
        }, {
            where: {
                id
            }
        });


        if (!artist[0])
            throw new InternalServerErrors("Something went wrong");

        return artist;
    },
    async delete(id) {
        const artist = await db.Artist.destroy({
            where: {
                id
            }
        });

        if (!artist)
            throw new InternalServerErrors("Something went wrong");

        return artist;
    }
}

module.exports = ArtistRepository;