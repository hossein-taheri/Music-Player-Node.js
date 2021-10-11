const HomeController = {
    index(req, res, next) {
        try {
            //TODO :: send All Index page info
        } catch (err) {
            next(err);
        }
    }
}

module.exports = HomeController