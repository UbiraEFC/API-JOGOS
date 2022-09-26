const { getGameList } = require("../adapter/game");

async function getList(req, res) {

	const page = req.query.page;
	const pageSize = req.query.page_size;
	const ordering = req.query.ordering;

	const list = await getGameList(page, pageSize, ordering);

	return res.json(list);
}

module.exports = { getList };