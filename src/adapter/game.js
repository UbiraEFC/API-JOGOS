const { getGames } = require('../service/rawg');

async function getGameList (page, pageSize, ordering) {
	const gameList = await getGames(page, pageSize, ordering);

	const payload = gameList.map(game => {
		return {
			id: game.id,
			name: game.name,
			released: game.released,
			background_image: game.background_image,
			rating: game.rating
		}
	});
	return payload;
};

module.exports = { getGameList }