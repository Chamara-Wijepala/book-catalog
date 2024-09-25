const pool = require('../db/pool');
const queries = require('../db/queries');

async function getAllGenres(req, res) {
	const { rows } = await pool.query(queries.getAllGenres);
	// checkedGenres always needs to be an array. req.query.genre returns a string
	// if it has one value, and an array if it has multiple.
	let checkedGenres = [];
	if (req.query.genre) checkedGenres = checkedGenres.concat(req.query.genre);

	res.render('genres', { genres: rows, checkedGenres });
}

module.exports = {
	getAllGenres,
};
