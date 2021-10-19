const db = require("../models");
const {InternalServerErrors} = require("../helpers/CustomErrors");
const {NotFound} = require("../helpers/CustomErrors");
const ALBUM_PER_PAGE = parseInt(process.env.ALBUM_PER_PAGE) || 12;

const AlbumRepository = {
    async findAll(page) {
        const albumsCount = await db.Music.count({})

        const albums = await db.Album.findAll({
            offset: (page - 1) * ALBUM_PER_PAGE,
            limit: ALBUM_PER_PAGE,
            include: [
                {
                    model: db.Music,
                    attributes: [
                        'id',
                        'name',
                        'link',
                    ],
                    include: [{
                        model: db.Artist,
                        attributes: [
                            'id',
                            'name',
                        ],
                    }],
                }
            ]
        })

        return {
            albums,
            albumsCount,
            pageCount: Math.ceil(albumsCount / ALBUM_PER_PAGE)
        }

    },
    async findOneById(id) {
        return await db.Album.findOne({
            where: {
                id
            },
            include: [{
                model: db.Music,
                required: false,
                attributes: [
                    'id',
                    'name',
                    'link',
                    'year',
                    'image',
                    'loadedCount'
                ],
                include: [{
                    model: db.Artist,
                    required: false,
                    attributes: [
                        'id',
                        'name'
                    ],
                }]
            }]
        })
    },
    async create(name, image, year, musics) {
        const album = await db.Album.create({
            name,
            image,
            year
        })
        await album.addMusics(musics)
        return album;
    },
    async update(id, name, image, year, musics) {
        const newAlbum = await db.Album.update({
            name,
            image,
            year
        }, {
            where: {
                id
            }
        });


        const album = await db.Album.findOne({
            where: {
                id
            }
        })

        if (!album)
            throw new NotFound("Album not found");


        await db.MusicAlbum.destroy({
            where: {
                albumId: id
            }
        })


        await album.addMusics(musics)

        return newAlbum;
    },
    async delete(id) {
        const album = await db.Album.destroy({
            where: {
                id
            }
        });

        if (!album)
            throw new InternalServerErrors("Something went wrong");

        return album;
    }
}

module.exports = AlbumRepository;