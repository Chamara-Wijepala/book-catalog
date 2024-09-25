const pool = require('../db/pool');
const queries = require('../db/queries');

async function getAllGenres(req, res) {
	const { rows } = await pool.query(queries.getAllGenres);
	// checkedGenres always needs to be an array. req.query.genre returns a string
	// if it has one value, and an array if it has multiple.
	let checkedGenres = [];
	if (req.query.genre) checkedGenres = checkedGenres.concat(req.query.genre);

	let booksByGenre;
	if (checkedGenres.length > 0) {
		const result = await pool.query(
			queries.getBooksWithAuthorNameByGenre,
			// Pass checkedGenres inside an array because it's length is dynamic
			[checkedGenres, checkedGenres.length]
		);
		booksByGenre = result.rows;
	}

	res.render('genres', {
		genres: rows,
		checkedGenres,
		booksByGenre,
	});
}

module.exports = {
	getAllGenres,
};
