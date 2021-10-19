const db = require("../models");
//global variables config
const global = require('./global');

module.exports = async () => {
    try {
        await db
            .sequelize
            .sync({
                force: false,
                logging: false
            })
        console.log("Successfully connected to database");

        await global();

    } catch (err) {
        console.log("Database Error :", err.message)
        process.exit();
    }
}

