const pool = require('../db/pool');
const queries = require('../db/queries');

async function getAllGenres(req, res) {
	const { rows } = await pool.query(queries.getAllGenres);
	// If req.query.genre doesn't exist, checkedGenre is set to undefined.
	// It always needs to be an array.
	const checkedGenres = req.query.genre ? req.query.genre : [];

	res.render('genres', { genres: rows, checkedGenres });
}

module.exports = {
	getAllGenres,
};
