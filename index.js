const express = require("express");
const router = require("./src/config/routes");
const config = require("./src/config/index");

const app = express();
app.use(express.json()); // para reconhecer o body como json
app.use(router);

app.listen(config.port, err => {
	if (err) {
		console.error(err);
	}
	console.log(`Server running on port ${config.port}!`);
});

// index.js -> routes -> controler -> adapter -> service || repository
