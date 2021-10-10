const ApiResponse = require("../helpers/responses/ApiResponse");
const {InternalServerErrors} = require("../helpers/CustomErrors");

const upload = async (req, res, next) => {
    try {
        if (req.file) {
            return ApiResponse
                .message(
                    req,
                    res,
                    null,
                    {
                        type: req.file.type,
                        name: req.file.filename,
                    }
                )
        } else {
            throw new InternalServerErrors()
        }
    } catch (err) {
        next(err);
    }
}

module.exports = {
    upload,
}