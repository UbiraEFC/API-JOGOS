const { saveClient, deleteClientById, getClientById } = require("../adapter/client");

async function save(req, res) {
	
	const client = req.body;

	const result = await saveClient(client);

	return res.json(result);
};

async function deleteById(req, res) {

	const { id } = req.body;

	const result = await deleteClientById(id);

	return res.json(result)
};

async function getById(req, res) {

	const { id } = req.params;

	const result = await getClientById(id);

	return res.json(result)
};

module.exports = { save, deleteById, getById };