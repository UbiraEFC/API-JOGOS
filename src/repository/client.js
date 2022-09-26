const { PrismaClient } = require('@prisma/client');

const prismaClient = new PrismaClient();

async function create(query) {
	return await prismaClient.clients.create(query);
}


async function deleteClient(id) {
	return await prismaClient.clients.delete({
		where: {
			id: id
		}
	});
}

async function getClient(id) {
	return await prismaClient.clients.findUnique({
		where: {
			id: id
		},
		include: {
			Favoritos: true
		}
	});
}
module.exports = { create, deleteClient, getClient };