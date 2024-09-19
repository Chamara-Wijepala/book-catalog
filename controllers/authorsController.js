const pool = require('../db/pool');
const queries = require('../db/queries');

async function getAllAuthors(req, res) {
	res.render('authors');
}

module.exports = {
	getAllAuthors,
};
