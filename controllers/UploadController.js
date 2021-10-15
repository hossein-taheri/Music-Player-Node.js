const ApiResponse = require("../helpers/responses/ApiResponse");
const {InternalServerErrors} = require("../helpers/CustomErrors");

const upload = async (req, res, next) => {
    try {
        if (req.file) {
            let path;
            if (req.file.type === 'Image') {
                path = '/images/' + req.file.filename
            } else if (req.file.type === 'Audio') {
                path = '/audios/' + req.file.filename
            }
            return ApiResponse
                .message(
                    req,
                    res,
                    null,
                    {
                        type: req.file.type,
                        name: req.file.filename,
                        path
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