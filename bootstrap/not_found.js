const ApiResponse = require("../helpers/responses/ApiResponse");
module.exports = (app) => {
    //If request is here , then no route has not been found
    app.use((req, res) => {
        // Respond with json
        ApiResponse
            .error(
                req,
                res,
                404,
                'Page Not Found'
            )
    });
}