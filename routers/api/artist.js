const express = require("express");
const router = express.Router();
const ArtistController = require('../../controllers/ArtistController')
const ArtistValidator = require('../../middlewares/validators/ArtistValidator')

router.get('/index', [ArtistValidator.index], ArtistController.index);

router.post('/create', [ArtistValidator.create], ArtistController.create);

router.post('/update/:music', [ArtistValidator.update], ArtistController.update);

router.post('/delete/:music', [ArtistValidator.delete], ArtistController.delete);


module.exports = router;