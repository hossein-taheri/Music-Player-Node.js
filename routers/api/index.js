const express = require("express");
const router = express.Router();
const home = require('./home');
const music = require('./music');
const genre = require('./genre');
const artist = require('./artist');
const album = require('./album');
const upload = require('./upload');


router.use('/home', home);

router.use('/music', music);

router.use('/genre', genre);

router.use('/artist', artist);

router.use('/album', album);

router.use('/upload', upload);

module.exports = router;