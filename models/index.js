const Sequelize = require("sequelize");
const sequelize = new Sequelize(
    process.env.DB_DATABASE,
    process.env.DB_USERNAME,
    process.env.DB_PASSWORD,
    {
        host: process.env.DB_HOSTNAME,
        dialect: process.env.DB_CONNECTION,
        operatorsAliases: '0'
    })

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.Music = require("./Music.js")(sequelize, Sequelize);
db.Album = require("./Album.js")(sequelize, Sequelize);
db.Artist = require("./Artist.js")(sequelize, Sequelize);
db.Genre = require("./Genre.js")(sequelize, Sequelize);


db.Music.belongsToMany(db.Artist, {through: 'music_artist'});
db.Artist.belongsToMany(db.Music, {through: 'music_artist'});

db.Music.belongsToMany(db.Album , {through:'music_album'});
db.Album.belongsToMany(db.Music, {through:'music_album'});

db.Music.belongsToMany(db.Genre, {through:'music_genre'});
db.Genre.belongsToMany(db.Music, {through:'music_genre'});

module.exports = db;