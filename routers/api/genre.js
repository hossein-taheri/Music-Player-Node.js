const express = require("express");
const router = express.Router();
const GenreController = require('../../controllers/GenreController')
const GenreValidator = require('../../middlewares/validators/GenreValidator')

router.get('/index', [GenreValidator.index], GenreController.index);

router.post('/create', [GenreValidator.create], GenreController.create);

router.post('/update/:music', [GenreValidator.update], GenreController.update);

router.post('/delete/:music', [GenreValidator.delete], GenreController.delete);


module.exports = router;