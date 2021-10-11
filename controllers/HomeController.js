const ApiResponse = require("../helpers/responses/ApiResponse");
const GlobalService = require("../services/GlobalService");
const HomeController = {
    async index(req, res, next) {
        try {
            return ApiResponse
                .message(
                    req,
                    res,
                    null,
                    {
                        newest: await GlobalService.getNewest(),
                        favorites: await GlobalService.getFavorites(),
                    }
                )
        } catch (err) {
            next(err);
        }
    }
}

module.exports = HomeController