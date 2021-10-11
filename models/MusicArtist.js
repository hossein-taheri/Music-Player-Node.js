module.exports = (sequelize, Sequelize) => {
    const MusicArtist = sequelize.define("music_artist", {
        musicId: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        artistId: {
            type: Sequelize.INTEGER,
            allowNull: false
        }
    }, {
        timestamps: false,
    });

    return MusicArtist;
};