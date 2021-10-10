const Error = require('./Errors');

const ApiResponse = {
    response: (req, res, status_code, messages, data) => {
        console.log(status_code)
        return res.json({
            status: status_code,
            status_message: Error[status_code](),
            messages: messages,
            data: data,
        });
    },
    error: (req, res, err_code, ...err_messages) => {
        console.log(err_messages)
        return ApiResponse
            .response(
                req,
                res,
                err_code,
                err_messages,
                null
            );
    },
    message: (req, res, message, data) => {
        return ApiResponse
            .response(
                req,
                res,
                200,
                (message ? [message] : []),
                data
            );
    },
    JoiError: (req, res, err) => {
        if (err?.details[0]?.message) {
            return ApiResponse
                .error(
                    req,
                    res,
                    400,
                    err.details[0].message
                )
        } else {
            return ApiResponse
                .error(
                    req,
                    res,
                    500
                )
        }
    }
}

module.exports = ApiResponse;
