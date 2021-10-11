module.exports = (sequelize, Sequelize) => {
    const MusicGenre = sequelize.define("music_genre", {
        musicId: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        genreId: {
            type: Sequelize.INTEGER,
            allowNull: false
        }
    }, {
        timestamps: false,
    });

    return MusicGenre;
};