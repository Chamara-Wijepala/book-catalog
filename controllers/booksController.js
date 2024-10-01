const pool = require('../db/pool');
const queries = require('../db/queries');

async function getAllBooks(req, res) {
	const { rows } = await pool.query(queries.getAllBooksWithAuthorName);
	res.render('index', { books: rows });
}

async function getBookById(req, res) {
	const book = await pool.query(queries.getBookById, [req.params.id]);
	const author = await pool.query(queries.getAuthorByBookId, [req.params.id]);
	const genres = await pool.query(queries.getAllGenresByBookId, [
		req.params.id,
	]);

	res.render('bookDetails', {
		book: book.rows[0],
		author: author.rows[0],
		genres: genres.rows,
	});
}

async function newBook(req, res) {
	const authors = await pool.query(queries.getAllAuthors);
	const genres = await pool.query(queries.getAllGenres);

	res.render('createBook', { authors: authors.rows, genres: genres.rows });
}

module.exports = {
	getAllBooks,
	getBookById,
	newBook,
};
