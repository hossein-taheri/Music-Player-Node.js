module.exports = (sequelize, Sequelize) => {
    const Artist = sequelize.define("artists", {
        name: {
            type: Sequelize.STRING,
            allowNull: false
        },
        image: {
            type: Sequelize.STRING,
            allowNull: true
        }
    }, {
        timestamps: false,
    });

    return Artist;
};