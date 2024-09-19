const pool = require('../db/pool');
const queries = require('../db/queries');

async function getAllGenres(req, res) {
	res.render('genres');
}

module.exports = {
	getAllGenres,
};
