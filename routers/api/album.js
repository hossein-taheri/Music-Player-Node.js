const express = require("express");
const router = express.Router();
const AlbumController = require('../../controllers/AlbumController')
const AlbumValidator = require('../../middlewares/validators/AlbumValidator')

router.get('/index', [AlbumValidator.index], AlbumController.index);

router.post('/create', [AlbumValidator.create], AlbumController.create);

router.post('/update/:music', [AlbumValidator.update], AlbumController.update);

router.post('/delete/:music', [AlbumValidator.delete], AlbumController.delete);


module.exports = router;