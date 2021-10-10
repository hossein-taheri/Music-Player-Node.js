module.exports = (sequelize, Sequelize) => {
    const Album = sequelize.define("albums", {
        name: {
            type: Sequelize.STRING,
            allowNull: false
        },
        year: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        image: {
            type: Sequelize.STRING,
            allowNull: true
        }
    }, {
        timestamps: false,
    });

    return Album;
};