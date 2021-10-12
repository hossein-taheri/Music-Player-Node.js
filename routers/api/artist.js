const express = require("express");
const router = express.Router();
const ArtistController = require('../../controllers/ArtistController')
const ArtistValidator = require('../../middlewares/validators/ArtistValidator')

router.get('/index', [ArtistValidator.index], ArtistController.index);

router.post('/create', [ArtistValidator.create], ArtistController.create);

router.post('/update/:artist', [ArtistValidator.update], ArtistController.update);

router.post('/delete/:artist', [ArtistValidator.delete], ArtistController.delete);


module.exports = router;