// book queries
const getAllBooks = `SELECT * FROM books`;

// author queries
const getAllAuthors = `SELECT * FROM authors`;

const getAuthorById = `
SELECT *
FROM authors
WHERE id = $1
`;

// genre queries
const getAllGenres = `SELECT * FROM genres`;

// author_books queries
const getAllBooksWithAuthorName = `
	SELECT cover, title, first_name, last_name
	FROM books
	JOIN author_books ON books.id = author_books.book_id
	JOIN authors ON author_books.author_id = authors.id
`;

const getBooksWithAuthorNameByGenre = `
	SELECT cover, title, first_name, last_name
	FROM books
	JOIN author_books ON books.id = author_books.book_id
	JOIN authors ON author_books.author_id = authors.id
	JOIN book_genres ON books.id = book_genres.book_id
	JOIN genres ON book_genres.genre_id = genres.id
	WHERE name = ANY ($1)
	GROUP BY books.id, authors.first_name, authors.last_name
	HAVING COUNT(DISTINCT genres.id) = $2
`;

module.exports = {
	getAllBooks,
	getAllAuthors,
	getAuthorById,
	getAllGenres,
	getAllBooksWithAuthorName,
	getBooksWithAuthorNameByGenre,
};
