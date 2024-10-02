// book queries
const getAllBooks = `SELECT * FROM books`;

const getBookById = `
SELECT cover, title, description, year
FROM books
WHERE id = $1
`;

const createBook = `
INSERT INTO books (cover, title, description, year)
VALUES ($1, $2, $3, $4)
RETURNING id
`;

// author queries
const getAllAuthors = `SELECT * FROM authors`;

const getAuthorById = `
SELECT *
FROM authors
WHERE id = $1
`;

const getAuthorByBookId = `
SELECT authors.id AS id, image, first_name, last_name, bio
FROM authors
JOIN author_books ON authors.id = author_books.author_id
WHERE book_id = $1
`;

const createAuthor = `
INSERT INTO authors (image, first_name, last_name, bio) VALUES ($1, $2, $3, $4)
`;

// genre queries
const getAllGenres = `SELECT * FROM genres`;

const getAllGenresByBookId = `
SELECT name
FROM genres
JOIN book_genres ON genres.id = book_genres.genre_id
WHERE book_id = $1
`;

const createGenre = `
INSERT INTO genres (name) VALUES ($1)
`;

// author_books queries
const getAllBooksWithAuthorName = `
	SELECT books.id AS id, cover, title, first_name, last_name
	FROM books
	JOIN author_books ON books.id = author_books.book_id
	JOIN authors ON author_books.author_id = authors.id
`;

const getBooksWithAuthorNameByGenre = `
	SELECT books.id AS id, cover, title, first_name, last_name
	FROM books
	JOIN author_books ON books.id = author_books.book_id
	JOIN authors ON author_books.author_id = authors.id
	JOIN book_genres ON books.id = book_genres.book_id
	JOIN genres ON book_genres.genre_id = genres.id
	WHERE name = ANY ($1)
	GROUP BY books.id, authors.first_name, authors.last_name
	HAVING COUNT(DISTINCT genres.id) = $2
`;

const getBooksByAuthorId = `
SELECT books.id AS id, cover, title, year
FROM books
JOIN author_books ON books.id = author_books.book_id
WHERE author_id = $1
`;

const createAuthorBookRelation = `
INSERT INTO author_books (author_id, book_id) VALUES ($1, $2)
`;

// book_genres queries
const createBookGenreRelation = `
INSERT INTO book_genres (book_id, genre_id)
SELECT $1, UNNEST($2::int[])
`;

module.exports = {
	getAllBooks,
	getBookById,
	createBook,
	getAllAuthors,
	getAuthorById,
	getAuthorByBookId,
	createAuthor,
	getAllGenres,
	getAllGenresByBookId,
	createGenre,
	getAllBooksWithAuthorName,
	getBooksWithAuthorNameByGenre,
	getBooksByAuthorId,
	createAuthorBookRelation,
	createBookGenreRelation,
};
