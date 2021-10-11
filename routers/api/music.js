const express = require("express");
const router = express.Router();
const MusicController = require('../../controllers/MusicController')
const MusicValidator = require('../../middlewares/validators/MusicValidator')

router.get('/index', [MusicValidator.index], MusicController.index);

router.get('/show/:music', [MusicValidator.show], MusicController.show);

router.post('/create', [MusicValidator.create], MusicController.create);

router.post('/update/:music', [MusicValidator.update], MusicController.update);

router.post('/delete/:music', [MusicValidator.delete], MusicController.delete);


module.exports = router;