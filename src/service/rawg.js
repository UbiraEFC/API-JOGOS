// axios e fetch - clientes de requisições a apis
const axios = require("axios");
const config = require("../config/index.js");

async function getGames(page, pageSize, ordering) {
	const params = {
		key: config.rawgApiKey,
		page,
		page_size: pageSize,
		ordering
	};
	
	const { data: { results } } = await axios.get(`${config.rawgUrl}/games`, { params });
	
	return results;
}

module.exports = { getGames }