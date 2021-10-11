module.exports = (sequelize, Sequelize) => {
    const MusicAlbum = sequelize.define("music_album", {
        musicId: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        albumId: {
            type: Sequelize.INTEGER,
            allowNull: false
        }
    }, {
        timestamps: false,
    });

    return MusicAlbum;
};