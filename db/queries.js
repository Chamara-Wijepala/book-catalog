// book queries
const getAllBooks = `SELECT * FROM books`;

// author queries
const getAllAuthors = `SELECT * FROM authors`;

// genre queries
const getAllGenres = `SELECT * FROM genres`;

// author_books queries
const getAllBooksWithAuthorName = `
	SELECT cover, title, first_name, last_name
	FROM books
	JOIN author_books ON books.id = author_books.book_id
	JOIN authors ON author_books.author_id = authors.id
`;

module.exports = {
	getAllBooks,
	getAllAuthors,
	getAllGenres,
	getAllBooksWithAuthorName,
};
