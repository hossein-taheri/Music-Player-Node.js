const express = require("express");
const router = express.Router();
const AlbumController = require('../../controllers/AlbumController')
const AlbumValidator = require('../../middlewares/validators/AlbumValidator')

router.get('/index', [AlbumValidator.index], AlbumController.index);

router.post('/create', [AlbumValidator.create], AlbumController.create);

router.get('/show/:album', [AlbumValidator.show], AlbumController.show);

router.post('/update/:album', [AlbumValidator.update], AlbumController.update);

router.post('/delete/:album', [AlbumValidator.delete], AlbumController.delete);


module.exports = router;