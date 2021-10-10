const multer = require('multer')
const path = require('path');
const {BadRequest} = require("../helpers/CustomErrors");
const appDir = path.dirname(require.main.filename);
const MAX_FILE_SIZE = parseInt(process.env.MAX_FILE_SIZE) || 104857600;

const storage = multer.diskStorage({
    destination: function (req, file, callback) {
        switch (path.extname(file.originalname)) {
            case '.mp3':
            case '.m4a':
            case '.ogg':
            case '.opus':
            case '.wav':
            case '.wma':
                file.type = 'Audio';
                callback(null, appDir + '/public/uploads/audios');
                break;
            default :
                callback(new BadRequest("File format is not correct"));
        }
    },
    filename: (req, file, callback) => {
        callback(null, file.originalname + '-' + Date.now() + path.extname(file.originalname));
    }
})
const upload = multer({
    storage,
    limits: {
        fileSize: MAX_FILE_SIZE //max file size in byte
    }
});


module.exports = {
    singleFile: upload.single('file')
}