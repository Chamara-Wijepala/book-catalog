const pool = require('../db/pool');
const queries = require('../db/queries');

async function getAllAuthors(req, res) {
	const { rows } = await pool.query(queries.getAllAuthors);
	res.render('authors', { authors: rows });
}

async function getAuthorById(req, res) {
	const { rows } = await pool.query(queries.getAuthorById, [req.params.id]);

	console.log(rows[0]);
	// res.sendStatus(200);
	res.render('authorDetails', { author: rows[0] });
}

module.exports = {
	getAllAuthors,
	getAuthorById,
};
