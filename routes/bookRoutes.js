const express = require('express');
const booksController = require('../controllers/booksController');

const router = express.Router();

router.route('/').get(booksController.getAllBooks);
router.route('/books/:id').get(booksController.getBookById);

module.exports = router;
