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

async function createBook(req, res) {
	const { body } = req;
	const cover = body.cover === '' ? null : body.cover;
	let { title, description, year } = body;

	// Adding an author and genres to a book is optional, so this data might not exist
	let authorId, genres;
	if (body.author_id) authorId = body.author_id;
	if (body.genre) genres = body.genre;

	year = parseInt(year);
	if (isNaN(year)) year = null;

	const returnedBook = await pool.query(queries.createBook, [
		cover,
		title,
		description,
		year,
	]);

	const newBookId = returnedBook.rows[0].id;

	if (authorId) {
		await pool.query(queries.createAuthorBookRelation, [authorId, newBookId]);
	}
	if (genres) {
		await pool.query(queries.createBookGenreRelation, [newBookId, genres]);
	}

	res.redirect('/');
}

module.exports = {
	getAllBooks,
	getBookById,
	newBook,
	createBook,
};
