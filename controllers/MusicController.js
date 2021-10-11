const MusicController = {
    index(req, res, next) {
        try {
            //TODO :: send all musics with filter
        } catch (err) {
            next(err);
        }
    },
    show(req, res, next) {
        try {
            //TODO :: send all music's info including lyric
        } catch (err) {
            next(err);
        }
    },
    create(req, res, next) {
        try {

        } catch (err) {
            next(err);
        }
    },
    update(req, res, next) {
        try {

        } catch (err) {
            next(err);
        }
    },
    delete(req, res, next) {
        try {

        } catch (err) {
            next(err);
        }
    },
}

module.exports = MusicController;