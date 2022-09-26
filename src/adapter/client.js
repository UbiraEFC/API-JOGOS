const { create, deleteClient, getClient } = require('../repository/client');
const { v4 } = require('uuid');

async function saveClient(body) {
	
	const query = {
		data: {
			id: v4(),
			...body,
		}
	}

	const result = await create(query);

	return result;
}

async function deleteClientById(id) {

	const result = await deleteClient(id);

	return result;
}

async function getClientById(id) {

	const result = await getClient(id);

	return result;
}

module.exports = { saveClient, deleteClientById, getClientById }