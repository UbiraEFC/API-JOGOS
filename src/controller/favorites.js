const { saveFavorite, deleteGameByFavoriteId } = require('../adapter/favorites');

function hello(req, res) {
	return res.send('Hello World');
};

async function save(req, res) {
	const body = req.body;

	const result = await saveFavorite(body);

	return res.json(result);
};


async function deleteGame(req, res) {
	const { id } = req.body;


	const result = await deleteGameByFavoriteId(id);
	return res.status(204).send();


}
module.exports = { hello, save, deleteGame };