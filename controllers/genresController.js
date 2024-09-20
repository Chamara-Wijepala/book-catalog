const pool = require('../db/pool');
const queries = require('../db/queries');

async function getAllGenres(req, res) {
	const { rows } = await pool.query(queries.getAllGenres);
	res.render('genres', { genres: rows });
}

module.exports = {
	getAllGenres,
};
