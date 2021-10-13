const db = require("../models");
const sequelize = require("sequelize");
const {InternalServerErrors} = require("../helpers/CustomErrors");
const {Op} = require("sequelize");
const MUSIC_PER_PAGE = process.env.MUSIC_PER_PAGE || 12;

const MusicRepository = {
    async getNewest() {
        return await db.Music.findAll({
            limit: MUSIC_PER_PAGE,
            order: [
                ['id', 'DESC']
            ]
        });
    },
    async getFavorites() {
        return await db.Music.findAll({
            limit: MUSIC_PER_PAGE,
            order: [
                ['loadedCount', 'DESC']
            ]
        });
    },
    async findAllByArtistGenreAlbum(page, artists, genres, albums, order) {
        if (order === 'newest')
            order = [
                ['id', 'DESC']
            ]
        else if (order === 'favorite')
            order = [
                ['loadedCount', 'DESC']
            ]
        else
            order = null;


        let where = [];
        if (artists) {
            where.push({
                id: {
                    [Op.in]: sequelize.literal(`(
                        SELECT musics.id
                        FROM music_artists, musics
                        WHERE
                            music_artists.musicId = musics.id
                            AND
                            music_artists.artistId IN (${artists})
                    )`)
                }
            })
        }
        if (genres) {
            where.push({
                id: {
                    [Op.in]: sequelize.literal(`(
                        SELECT musics.id
                        FROM music_genres, musics
                        WHERE 
                            music_genres.musicId = musics.id
                            AND
                            music_genres.genreId IN (${genres})
                    )`)
                }
            })
        }
        if (albums) {
            where.push({
                id: {
                    [Op.in]: sequelize.literal(`(
                        SELECT musics.id
                        FROM music_albums, musics
                        WHERE 
                            music_albums.musicId = musics.id
                            AND
                            music_albums.albumId IN (${albums})
                    )`)
                }
            })
        }


        return await db.Music.findAll({
            attributes: [
                'id',
                'name',
                'link',
                'year',
                'image',
                'loadedCount'
            ],
            offset: (page - 1) * MUSIC_PER_PAGE,
            limit: MUSIC_PER_PAGE,
            order: order,
            where
        })
    },
    async findOneById(id) {
        return db.Music.findOne({
            where: {
                id
            }
        })
    },
    async create(name, link, year, lyric, image, artists, genres) {
        const music = await db.Music.create({
            name,
            link,
            year,
            lyric,
            image
        })
        await music.addArtists(artists);
        await music.addGenres(genres);
        return music;
    },
    async update(id, name, link, year, lyric, image, artists, genres) {
        const newMusic = await db.Music.update({
            name,
            link,
            year,
            lyric,
            image
        }, {
            where: {
                id
            }
        })


        const music = await db.Music.findOne({
            where: {
                id
            }
        })

        await db.MusicArtist.destroy({
            where: {
                musicId: id
            }
        })
        await db.MusicGenre.destroy({
            where: {
                musicId: id
            }
        })

        await music.addArtists(artists);
        await music.addGenres(genres);

        return newMusic;
    },
    async delete(id) {
        const music = await db.Music.destroy({
            where: {
                id
            }
        });

        if (!music)
            throw new InternalServerErrors("Something went wrong");

        return music;
    }
}

module.exports = MusicRepository;