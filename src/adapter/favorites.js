const { create, deleteFavoriteGame } = require('../repository/game');
const { v4 } = require('uuid');

async function saveFavorite(body) {
	
	const query = {
		data: {
			id: v4(),
			...body,
		}
	}

	const result = await create(query);

	return result;
}

async function deleteGameByFavoriteId(favorite_id) {

	const result = await deleteFavoriteGame(favorite_id);

	return result;
}

module.exports = { saveFavorite, deleteGameByFavoriteId }