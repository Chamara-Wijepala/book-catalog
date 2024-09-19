const express = require('express');
const genresController = require('../controllers/genresController');

const router = express.Router();

router.route('/').get(genresController.getAllGenres);

module.exports = router;
