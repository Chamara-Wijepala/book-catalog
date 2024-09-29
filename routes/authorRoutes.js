const express = require('express');
const authorsController = require('../controllers/authorsController');

const router = express.Router();

router.route('/').get(authorsController.getAllAuthors);
router.route('/').post(authorsController.createAuthor);
router.route('/:id').get(authorsController.getAuthorById);

module.exports = router;
