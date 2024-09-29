const express = require('express');
const genresController = require('../controllers/genresController');

const router = express.Router();

router.route('/').get(genresController.getAllGenres);
router.route('/').post(genresController.createGenre);

module.exports = router;
