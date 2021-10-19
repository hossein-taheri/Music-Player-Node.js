const db = require("../models");

db
    .sequelize
    .sync({
        force: false,
        logging: false
    })
    .then(() => {
        console.log("Successfully connected to database");
    })
    .catch(err => {
        console.log("Database Error :", err.message)
    });