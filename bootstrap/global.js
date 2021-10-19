const GlobalService = require("../services/GlobalService");

module.exports = async function () {
    try {

        await GlobalService.getNewest();

        await GlobalService.getFavorites();

    } catch (err) {
        console.log(err)
        process.exit(-1)
    }
}