const pool = require('../db/pool');
const queries = require('../db/queries');

async function getAllAuthors(req, res) {
	const { rows } = await pool.query(queries.getAllAuthors);
	res.render('authors', { authors: rows });
}

module.exports = {
	getAllAuthors,
};
