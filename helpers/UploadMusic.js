const multer = require('multer')
const path = require('path');
const appDir = path.dirname(require.main.filename);
const storage = multer.diskStorage({
    destination: appDir + '/public/images/',
    filename: (req, file, cb) => {
        cb(null, file.originalname + '-' + Date.now() + path.extname(file.originalname));
    }
})
const upload = multer({
    storage,
    fileFilter: (req, file, cb) => {
        if (
            (path.extname(file.originalname) !== '.wav')
            &&
            (path.extname(file.originalname) !== '.mp3')
            &&
            (path.extname(file.originalname) !== '.ogg')
        ) {
            cb(new Error('Uploaded file is not an image'));
        } else {
            cb(null, true);
        }
    }
});


const UploadMusic = {
    singleImage: upload.single('image')
}
module.exports = UploadMusic;