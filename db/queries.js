// book queries
const getAllBooks = `SELECT * FROM books`;

// author queries
const getAllAuthors = `SELECT * FROM authors`;

// genre queries
const getAllGenres = `SELECT * FROM genres`;

module.exports = {
	getAllBooks,
	getAllAuthors,
	getAllGenres,
};
