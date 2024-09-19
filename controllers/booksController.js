const pool = require('../db/pool');
const queries = require('../db/queries');

async function getAllBooks(req, res) {
	const { rows } = await pool.query(queries.getAllBooks);
	res.render('index', { books: rows });
}

module.exports = {
	getAllBooks,
};
