const pool = require('../db/pool');
const queries = require('../db/queries');

async function getAllAuthors(req, res) {
	const { rows } = await pool.query(queries.getAllAuthors);
	res.render('authors', { authors: rows });
}

async function getAuthorById(req, res) {
	const authorId = req.params.id;
	const { rows } = await pool.query(queries.getAuthorById, [authorId]);
	const authorBooks = await pool.query(queries.getBooksByAuthorId, [authorId]);

	res.render('authorDetails', {
		author: rows[0],
		authorBooks: authorBooks.rows,
	});
}

async function createAuthor(req, res) {
	const { body } = req;
	const image = body.image === '' ? null : body.image;
	const firstName = body.first_name;
	const lastName = body.last_name === '' ? null : body.last_name;
	const bio = body.bio === '' ? null : body.bio;

	await pool.query(queries.createAuthor, [image, firstName, lastName, bio]);

	res.redirect('/authors');
}

module.exports = {
	getAllAuthors,
	getAuthorById,
	createAuthor,
};
