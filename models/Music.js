module.exports = (sequelize, Sequelize) => {
    const Music = sequelize.define("musics", {
        name: {
            type: Sequelize.STRING,
            allowNull: false
        },
        link: {
            type: Sequelize.STRING,
            allowNull: false
        },
        year: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        lyric: {
            type: Sequelize.TEXT,
            allowNull: true
        },
        image: {
            type: Sequelize.STRING,
            allowNull: true
        },
        loadedCount: {
            type: Sequelize.INTEGER,
            allowNull: false,
            defaultValue: 0
        }
    }, {
        timestamps: false,
    });

    return Music;
};