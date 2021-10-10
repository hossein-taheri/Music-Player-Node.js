module.exports = (sequelize, Sequelize) => {
    const Genre = sequelize.define("genres", {
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

    return Genre;
};