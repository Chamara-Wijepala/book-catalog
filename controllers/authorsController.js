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

module.exports = {
	getAllAuthors,
	getAuthorById,
};
