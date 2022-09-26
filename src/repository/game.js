const { PrismaClient } = require('@prisma/client');

const prismaClient = new PrismaClient();

async function create(query) {
	return await prismaClient.favorites.create(query);
}

async function deleteFavoriteGame(id) {
	return await prismaClient.favorites.delete({
		where: {
			id: id,
		}
	});

}


module.exports = { create, deleteFavoriteGame };