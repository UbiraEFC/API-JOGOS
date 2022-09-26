require('dotenv').config();

const config = { 
	databaseUrl: process.env.DATABASE_URL,
	port: process.env.PORT,
	rawgApiKey: process.env.RAWG_API_KEY,
	rawgUrl: process.env.RAWG_URL,
};

module.exports = config;