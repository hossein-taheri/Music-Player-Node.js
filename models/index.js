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
db.MusicAlbum = require("./MusicAlbum.js")(sequelize, Sequelize);
db.MusicArtist = require("./MusicArtist.js")(sequelize, Sequelize);
db.MusicGenre = require("./MusicGenre.js")(sequelize, Sequelize);


db.Music.belongsToMany(db.Artist, {through: db.MusicArtist});
db.Artist.belongsToMany(db.Music, {through: db.MusicArtist});

db.Music.belongsToMany(db.Album, {through: db.MusicAlbum});
db.Album.belongsToMany(db.Music, {through: db.MusicAlbum});

db.Music.belongsToMany(db.Genre, {through: db.MusicGenre});
db.Genre.belongsToMany(db.Music, {through: db.MusicGenre});

module.exports = db;