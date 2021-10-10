const express = require("express");
const UploadService = require("../../services/UploadService");
const UploadController = require("../../controllers/UploadController");
const router = express.Router();


router.post('/audio', [UploadService.singleFile], UploadController.upload);

module.exports = router;