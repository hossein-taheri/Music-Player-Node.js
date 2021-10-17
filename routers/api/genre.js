const express = require("express");
const router = express.Router();
const GenreController = require('../../controllers/GenreController')
const GenreValidator = require('../../middlewares/validators/GenreValidator')

router.get('/index', [GenreValidator.index], GenreController.index);

router.get('/show/:genre', [GenreValidator.show], GenreController.show);

router.post('/create', [GenreValidator.create], GenreController.create);

router.post('/update/:genre', [GenreValidator.update], GenreController.update);

router.post('/delete/:genre', [GenreValidator.delete], GenreController.delete);


module.exports = router;